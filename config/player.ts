// Custom Player Styling, overriding css variables
export const MEDIA_STYLES = {
  "--video-brand": "#F31260",
  "--video-border-radius": "16px",
  "--video-border": "100px solid rgb(255 255 255 / 0.1)",

  "--media-tooltip-border-radius": "999px",
  "--media-tooltip-padding": "4px 16px",
  "--media-tooltip-font-size": "14px",
  "--media-tooltip-bg-color": "#18181b",
  "--media-tooltip-border": "1px solid rgb(255 255 255 / 0.1)",
  "--media-tooltip-color": "#fff",

  "--media-menu-bg": "#18181b",
  "--media-menu-border-radius": "16px",
  "--media-menu-top-bar-bg": "#18181b",

  "--media-menu-section-border-radius": "12px",
  "--media-menu-section-bg": "#18181b",
  "--media-menu-section-divider": "transparent",
  "--media-menu-section-border": "1px solid rgb(255 255 255 / 0.1)",

  "--media-menu-item-border-radius": "12px",
  "--media-menu-item-bg": "#18181b",
  "--media-menu-item-hover-bg": "#101010",

  "--media-menu-slider-height": "32px;",
  "--media-menu-slider-track-bg": "var(--color-gray-50);",
  "--media-menu-slider-track-fill-bg": "#F31260",

  "--media-menu-checkbox-bg-active": "#F31260",
  "--media-menu-checkbox-height": "24px",
  "--media-menu-checkbox-width": "48px",
  "--media-menu-checkbox-handle-diameter": "calc(var(--media-menu-checkbox-height) - 4px)",

  "--media-font-family": "var(--font-urbanist)"
}

export const demoPlayerTracks = [
  // Subtitles
  {
    src: 'https://files.vidstack.io/sprite-fight/subs/english.vtt',
    label: 'English',
    language: 'en-US',
    kind: 'subtitles',
    default: true,
  },
  // Chapters
  {
    src: 'https://files.vidstack.io/sprite-fight/chapters.vtt',
    kind: 'chapters',
    language: 'en-US',
    default: true,
  },
];

export const DEMO_VIDEO_SRC = "https://files.vidstack.io/sprite-fight/hls/stream.m3u8"

export const DEMO_VIDEO_POSTER = "https://files.vidstack.io/sprite-fight/poster.webp"

export const DEMO_VIDEO_LOGO = "https://image.tmdb.org/t/p/original/eHUj6cIvrKH0bDIDnpOeYS1qCHY.png"

export const DEMO_VIDEO_THUMBNAILS = "https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"

export const DEMO_VIDEO_DESC =
  `
    Set in 80’s-Britain, when a group of rowdy teenagers trek into an isolated forest,
    they discover peaceful mushroom creatures that turn out to be an unexpected force of nature.
  `
