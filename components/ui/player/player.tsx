'use client'

// Imports
import Image from "next/image";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import {
  MediaPlayer,
  MediaProvider,
  MediaPlayerInstance,
  Poster,
  Track,
  useMediaRemote,
  MediaPlayEvent,
  MediaPlayFailEvent,
  MediaWaitingEvent,
  MediaSeekedEvent,
  MediaPauseEvent,
  useMediaState
} from "@vidstack/react";

import {
  defaultLayoutIcons,
  DefaultVideoLayout
} from "@vidstack/react/player/layouts/default";

import { useEffect, useRef, useState } from "react";
import { DEMO_VIDEO_DESC, DEMO_VIDEO_LOGO, DEMO_VIDEO_POSTER, DEMO_VIDEO_SRC, DEMO_VIDEO_THUMBNAILS, demoPlayerTracks, MEDIA_STYLES } from "@/config/player";
import clsx from "clsx";
import { syncSocket } from "@/lib/socket";
import { sendPauseEvent, sendPlayEvent, sendPlayFailEvent, sendSeekEvent, sendWaitingEvent } from "@/lib/functions/socketio";

function Player() {
  const title = "Sprite Fright";
  const player = useRef<MediaPlayerInstance>(null);
  const [nativeWaitEvent, setNativeSeekEvent] = useState<MediaWaitingEvent | null>(null)
  const playing = useMediaState('playing', player);
  const currentTime = useMediaState('currentTime', player)
  const waiting = useMediaState('waiting', player)
  const remote = useMediaRemote(player);

  // Event listeners
  const onPlay = (nativeEvent: MediaPlayEvent) => {
    if (nativeEvent.isOriginTrusted)
      sendPlayEvent(syncSocket, currentTime, waiting);
  }

  const onPause = (nativeEvent: MediaPauseEvent) => {
    if (nativeEvent.isOriginTrusted)
      sendPauseEvent(syncSocket, currentTime);
  }

  const onSeeked = (detail: number, nativeEvent: MediaSeekedEvent) => {
    const seekKeyEvent = nativeEvent.triggers.findType('keyup') as KeyboardEvent;
    if (nativeEvent.isOriginTrusted || seekKeyEvent?.key)
      sendSeekEvent(detail, syncSocket);
  }

  const onWaiting = (nativeEvent: MediaWaitingEvent) => {
    setNativeSeekEvent(nativeEvent);
  }

  const onPlayFail = (detail: Error, nativeEvent: MediaPlayFailEvent) => {
    if (nativeEvent.isOriginTrusted)
      sendPlayFailEvent(syncSocket, currentTime);
  }

  // Wait event management
  useEffect(() => {
    setTimeout(() => {
      const state = player.current!.state;
      if (nativeWaitEvent?.isOriginTrusted && state.waiting) {
        sendWaitingEvent(syncSocket, currentTime);
      }
    }, 2000)

    if (!waiting) {
      sendPlayEvent(syncSocket, currentTime, waiting);
    }
    setNativeSeekEvent(null)

    return () => { }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waiting])

  // Event Listening
  useEffect(() => {
    syncSocket.connect()
    syncSocket.emit('join-room', 'demo-party', (msg: string) => {
      console.log(msg);
    });

    syncSocket.on("event:play", ({ detail }): any => {
      remote.seek(detail.currentTime);
      remote.play();
    });

    syncSocket.on("event:pause", ({ detail }): any => {
      remote.seek(detail.currentTime);
      remote.pause();
    });

    syncSocket.on("event:seek", ({ detail }): any => {
      remote.seek(detail.currentTime);
    });

    syncSocket.on("event:waiting", ({ detail }): any => {
      remote.seek(detail.currentTime);
      remote.pause();
    })

    return () => {
      syncSocket.off('event:play');
      syncSocket.off('event:pause');
      syncSocket.off('event:seek');
      syncSocket.off('event:waiting');
      syncSocket.off('event:play-fail');
      syncSocket.disconnect();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MediaPlayer
      ref={player}
      className="h-[480px]"
      autoPlay={true}
      title={title}
      src={DEMO_VIDEO_SRC}
      aspectRatio="16/9"
      onPlay={onPlay}
      onPause={onPause}
      onPlayFail={onPlayFail}
      onSeeked={onSeeked}
      onWaiting={onWaiting}
    >
      <MediaProvider >
        <Poster
          className="absolute inset-0 block h-full w-full opacity-0 transition-opacity data-[visible]:opacity-100 object-cover"
          src={DEMO_VIDEO_POSTER}
          alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
        />
        {
          demoPlayerTracks.map((track) => (
            <Track
              src={track.src}
              kind={track.kind as TextTrackKind}
              language={track.language}
              default={track.default}
              label={track.label}
              key={track.src} />
          ))
        }
      </MediaProvider>
      <DefaultVideoLayout
        className="relative bg-red"
        icons={defaultLayoutIcons}
        thumbnails={DEMO_VIDEO_THUMBNAILS}
        style={MEDIA_STYLES}
      >
        <div className={clsx(
          "absolute z-[5] top-0 left-0 w-full h-full bg-black/50",
          "text-white flex justify-center items-start p-12",
          (playing && !waiting) && 'hidden',
          "cursor-pointer",
          "rounded-md flex-col gap-4"
        )}
          onClick={() => {
            remote.play();
            sendPlayEvent(syncSocket, currentTime, waiting);
          }}
        >
          <Image
            alt={`Movie/Tv Logo`}
            src={DEMO_VIDEO_LOGO}
            className="w-fit h-auto aspect-auto"
            height={50}
            width={150}
          />
          <span className="w-4/6">{DEMO_VIDEO_DESC}</span>
        </div>
      </DefaultVideoLayout>
    </MediaPlayer>
  );
}

export default Player;
