import { createContext, useEffect, useState, useRef } from "react";

export const SmoothScrollContext = createContext({
  scroll: null,
  isReady: false,
});

export const SmoothScrollProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const LocomotiveScrollRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        LocomotiveScrollRef.current = new LocomotiveScroll({
          el: document.querySelector("[data-scroll-container]") ?? undefined,
          ...{ smooth: true },
        });

        setIsReady(() => true);
      } catch (error) {
        throw Error(`[SmoothScrollProvider]: ${error}`);
      }
    })();

    return () => {
      if (LocomotiveScrollRef.current) {
        const scrollbar = document.querySelector(".c-scrollbar");
        !!scrollbar && scrollbar.remove();
        LocomotiveScrollRef.current.destroy();
      }

      setIsReady(false);
    };
  }, [isReady]);
  return (
    <SmoothScrollContext.Provider
      value={{ scroll: LocomotiveScrollRef.current, isReady }}
    >
      {children}
    </SmoothScrollContext.Provider>
  );
};

SmoothScrollContext.displayName = "SmoothScrollContext";
SmoothScrollProvider.displayName = "SmoothScrollProvider";
