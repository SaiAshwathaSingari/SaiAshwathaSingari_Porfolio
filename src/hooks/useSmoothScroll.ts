import { createContext, useContext } from "react";

export interface ScrollToOptions {
  offset?: number;
  duration?: number;
  [key: string]: unknown;
}

export interface SmoothScrollContextValue {
  scrollTo: (target: string | HTMLElement, options?: ScrollToOptions) => void;
}

export const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);
