import { TxtTheme } from "./view";
import { MediaQueryType, TxtType } from "../types/txt";

const TxtThemes = (props: TxtType & { direction?: "column" | "row" }) =>
  TxtTheme(props);

export const extandedMediaQuery = ({ _mediaQuery }: MediaQueryType) => {
  const mq_theme = () => {
    if (_mediaQuery) {
      return {
        s1440: {
          ...(TxtThemes(_mediaQuery.s1440 || {}) as any),
          "&:hover": TxtThemes(_mediaQuery.s1440?._hover || {}) as any,
          "&:active": TxtThemes(_mediaQuery.s1440?._active || {}) as any,
        },
        s1280: {
          ...(TxtThemes(_mediaQuery.s1280 || {}) as any),
          "&:hover": TxtThemes(_mediaQuery.s1280?._hover || {}) as any,
          "&:active": TxtThemes(_mediaQuery.s1280?._active || {}) as any,
        },
        s1080: {
          ...(TxtThemes(_mediaQuery.s1080 || {}) as any),
          "&:hover": TxtThemes(_mediaQuery.s1080?._hover || {}) as any,
          "&:active": TxtThemes(_mediaQuery.s1080?._active || {}) as any,
        },
        s768: {
          ...(TxtThemes(_mediaQuery.s768 || {}) as any),
          "&:hover": TxtThemes(_mediaQuery.s768?._hover || {}) as any,
          "&:active": TxtThemes(_mediaQuery.s768?._active || {}) as any,
        },
        s600: {
          ...(TxtThemes(_mediaQuery.s600 || {}) as any),
          "&:hover": TxtThemes(_mediaQuery.s600?._hover || {}) as any,
          "&:active": TxtThemes(_mediaQuery.s600?._active || {}) as any,
        },
        s428: {
          ...(TxtThemes(_mediaQuery.s428 || {}) as any),
          "&:hover": TxtThemes(_mediaQuery.s428?._hover || {}) as any,
          "&:active": TxtThemes(_mediaQuery.s428?._active || {}) as any,
        },
      };
    }
  };

  const screenSize = [1440, 1280, 1080, 768, 600, 428];
  const MQ = screenSize.map((bp) => `@media (max-width: ${bp}px)`);

  return {
    [MQ[0]]: { ...(mq_theme()?.s1440 as any) },
    [MQ[1]]: { ...(mq_theme()?.s1280 as any) },
    [MQ[2]]: { ...(mq_theme()?.s1080 as any) },
    [MQ[3]]: { ...(mq_theme()?.s768 as any) },
    [MQ[4]]: { ...(mq_theme()?.s600 as any) },
    [MQ[5]]: { ...(mq_theme()?.s428 as any) },
  };
};
