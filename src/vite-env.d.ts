/// <reference types="vite/client" />

interface UnityLoader {
  instantiate: (
    container: HTMLElement | null,
    jsonUrl: string,
    options: {
      onProgress?: (progress: number) => void;
      Module?: {
        onRuntimeInitialized?: () => void;
      };
    }
  ) => {
    Quit: () => void;
    SetFullscreen: (fullscreen: number) => void;
  };
}

interface Window {
  UnityLoader: UnityLoader;
}
