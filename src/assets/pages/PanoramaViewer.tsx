import React, { useEffect, useRef } from 'react';
import { Viewer, ImagePanorama } from 'panolens';

interface PanoramaViewerProps {
  pathToImage: string;
}

const PanoramaViewer: React.FC<PanoramaViewerProps> = ({pathToImage}: any) => {
  const viewerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(pathToImage) {
      if (viewerRef.current) {
        const panorama = new ImagePanorama(pathToImage);
        const viewer = new Viewer({
          container: viewerRef.current,
          autoRotate: true,
          autoRotateSpeed: 0.5,
          controlBar: true,
          controlButtons: ['fullscreen', 'setting', 'video'],
          viewIndicator: true,
        });
        
        viewer.add(panorama);
        if (document.getElementsByClassName('panolens-canvas')) {
          let a: any = document.getElementsByClassName('panolens-canvas')[0]
          a.style.display = 'none'
        }
        return () => {
          viewer.dispose();
        };
      }
    }
  }, []);

  return <div ref={viewerRef} style={{ width: '100%', height: '100%' }} />;
};

export default PanoramaViewer;
