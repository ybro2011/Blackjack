import React, { useEffect, useRef } from 'react';
import './UnityGame.css';

interface UnityGameProps {
  gameTitle?: string;
}

const UnityGame = ({
  gameTitle = 'Unity Game'
}: UnityGameProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadingBarRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const unityInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load Unity WebGL build
    const loadUnityGame = async () => {
      try {
        // Create script element for Unity loader
        const script = document.createElement('script');
        script.src = '/unity-game/Build/UnityLoader.js';
        script.async = true;
        
        script.onload = () => {
          if (window.UnityLoader) {
            unityInstanceRef.current = window.UnityLoader.instantiate(
              containerRef.current,
              '/unity-game/Build/your-game-name.json',
              {
                onProgress: (progress: number) => {
                  if (progressRef.current) {
                    progressRef.current.style.width = `${progress * 100}%`;
                  }
                },
                Module: {
                  onRuntimeInitialized: () => {
                    if (loadingBarRef.current) {
                      loadingBarRef.current.style.display = 'none';
                    }
                  }
                }
              }
            );
          }
        };

        document.body.appendChild(script);

        return () => {
          // Cleanup
          if (unityInstanceRef.current) {
            unityInstanceRef.current.Quit();
          }
          document.body.removeChild(script);
        };
      } catch (error) {
        console.error('Error loading Unity game:', error);
      }
    };

    loadUnityGame();
  }, []);

  return (
    <div className="unity-container">
      <div className="unity-header">
        <h2>{gameTitle}</h2>
      </div>
      <div className="unity-game">
        <div ref={containerRef} className="unity-canvas-container" />
        <div ref={loadingBarRef} className="unity-loading-bar">
          <div className="unity-progress-bar">
            <div ref={progressRef} className="unity-progress"></div>
          </div>
          <div className="unity-progress-text">Loading...</div>
        </div>
      </div>
      <div className="unity-footer">
        <div className="unity-fullscreen-button" onClick={() => {
          if (unityInstanceRef.current) {
            unityInstanceRef.current.SetFullscreen(1);
          }
        }}>
          Fullscreen
        </div>
      </div>
    </div>
  );
};

export default UnityGame;
