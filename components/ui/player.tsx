'use client'

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import "@vidstack/react/player/styles/plyr/theme.css"

import {
  MediaPlayer,
  MediaProvider,
  type MediaPlayEvent,
  type MediaPauseEvent,
  type MediaSeekingEvent,
  type MediaSeekedEvent,
  type MediaWaitingEvent
} from "@vidstack/react";

import {
  defaultLayoutIcons,
  DefaultVideoLayout
} from "@vidstack/react/player/layouts/default";

function Player() {
  const onPlay = (nativeEvent: MediaPlayEvent) => {
    console.log(nativeEvent)
  }

  const onPause = (nativeEvent: MediaPauseEvent) => {
    console.log(nativeEvent)
  }

  const onSeeking = (detail: number, nativeEvent: MediaSeekingEvent) => {
    console.log(detail, nativeEvent)
  }

  const onSeeked = (detail: number, nativeEvent: MediaSeekedEvent) => {
    console.log('seeked', detail, nativeEvent)
  }

  const onWaiting = (nativeEvent: MediaWaitingEvent) => {
    console.log(nativeEvent)
  }

  return (
    <MediaPlayer
      className="h-96 w-[960px]"
      title="Sprite Fight"
      src="https://files.vidstack.io/sprite-fight/hls/stream.m3u8"
      aspectRatio="16/9"
      onPlay={onPlay}
      onPause={onPause}
      onSeeking={onSeeking}
      onSeeked={onSeeked}
      onWaiting={onWaiting}
    >
      <MediaProvider />
      <DefaultVideoLayout
        icons={defaultLayoutIcons}
        thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
        style={{
          "--video-brand": "#F31260",

          "--media-tooltip-border-radius": "999px",
          "--media-tooltip-padding": "4px 16px",
          "--media-tooltip-font-size": "14px",
          "--media-tooltip-bg-color": "#18181b",
          "--media-tooltip-border": "1px solid rgb(255 255 255 / 0.1)",
          "--media-tooltip-color": "#fff",

          "--media-menu-bg": "#18181b",
          "--media-menu-border-radius": "16px",
          "--media-menu-top-bar-bg": "#18181b",
          "--media-menu-top-bar-padding": "100px",

          "--media-menu-section-border-radius": "12px",
          "--media-menu-section-bg": "#18181b",
          "--media-menu-section-divider": "transparent",
          "--media-menu-section-border": "1px solid rgb(255 255 255 / 0.1)",

          "--media-menu-item-border-radius": "12px",
          "--media-menu-item-hover-bg": "none",
          "--media-menu-item-bg": "#18181b",

          "--media-menu-slider-height": "32px;",
          "--media-menu-slider-track-bg": "var(--color-gray-50);",
          "--media-menu-slider-track-fill-bg": "#F31260",

          "--media-menu-checkbox-bg-active": "#F31260",
          "--media-menu-checkbox-height": "24px",
          "--media-menu-checkbox-width": "48px",

          "--media-font-family": "var(--font-urbanist)"
        }}
      />
    </MediaPlayer>
  );
}

export default Player;
