import { createContext, useContext } from "react";

export const SmoothScrollContext = createContext({ scrollTo: () => {} });

export const useSmoothScroll = () => useContext(SmoothScrollContext);
