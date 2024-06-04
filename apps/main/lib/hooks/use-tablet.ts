import { useIsSSR } from "@react-aria/ssr";

const TABLET_SCREEN_WIDTH = 767;

export function useIsTablet(): boolean {
  let isSSR = useIsSSR();

  if (isSSR || typeof window === "undefined") {
    return false;
  }

  return window.screen.width <= TABLET_SCREEN_WIDTH;
}
