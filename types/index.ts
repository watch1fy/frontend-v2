import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ImageProps = {
  size?: number;
  width: number | undefined;
  height: number | undefined
};
