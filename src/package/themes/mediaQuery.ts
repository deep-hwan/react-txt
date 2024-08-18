import { TxtTheme } from "./view";
import { MediaQueryType, TxtType } from "../types/txt";

const TxtThemes = (props: TxtType & { direction?: "column" | "row" }) =>
  TxtTheme(props);

export const extandedMediaQuery = ({ mediaQuery }: MediaQueryType) => {
  const mq_theme = () => {
    if (mediaQuery) {
      return {
        s1440: {
          ...(TxtThemes(mediaQuery.s1440 || {}) as any),
          "&:hover": TxtThemes(mediaQuery.s1440?.hover || {}) as any,
          "&:active": TxtThemes(mediaQuery.s1440?.active || {}) as any,
        },
        s1280: {
          ...(TxtThemes(mediaQuery.s1280 || {}) as any),
          "&:hover": TxtThemes(mediaQuery.s1280?.hover || {}) as any,
          "&:active": TxtThemes(mediaQuery.s1280?.active || {}) as any,
        },
        s1080: {
          ...(TxtThemes(mediaQuery.s1080 || {}) as any),
          "&:hover": TxtThemes(mediaQuery.s1080?.hover || {}) as any,
          "&:active": TxtThemes(mediaQuery.s1080?.active || {}) as any,
        },
        s768: {
          ...(TxtThemes(mediaQuery.s768 || {}) as any),
          "&:hover": TxtThemes(mediaQuery.s768?.hover || {}) as any,
          "&:active": TxtThemes(mediaQuery.s768?.active || {}) as any,
        },
        s600: {
          ...(TxtThemes(mediaQuery.s600 || {}) as any),
          "&:hover": TxtThemes(mediaQuery.s600?.hover || {}) as any,
          "&:active": TxtThemes(mediaQuery.s600?.active || {}) as any,
        },
        s428: {
          ...(TxtThemes(mediaQuery.s428 || {}) as any),
          "&:hover": TxtThemes(mediaQuery.s428?.hover || {}) as any,
          "&:active": TxtThemes(mediaQuery.s428?.active || {}) as any,
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
