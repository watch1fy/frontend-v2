import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import React from "react";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

function Player() {
  return (
    <MediaPlayer
      title="Sprite Fight"
      src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/high.mp4"
      aspectRatio="16/9"
    >
      <MediaProvider></MediaProvider>
      <DefaultVideoLayout
        icons={defaultLayoutIcons}
        thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
        style={{
          "--video-brand": "#F31260",
        }}
      />
    </MediaPlayer>
  );
}

export default Player;
