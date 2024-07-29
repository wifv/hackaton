declare module 'panolens' {
  export class Viewer {
    constructor(options: {
      container: HTMLElement;
      output?: string;
      autoRotate?: boolean;
      autoRotateSpeed?: number;
      controlBar?: boolean;
      controlButtons?: string[];
      viewIndicator?: boolean;
    });

    add(panorama: ImagePanorama | VideoPanorama): void;
    dispose(): void;
  }

  export class ImagePanorama extends THREE.Texture {
    constructor(image: string);
  }

  export class VideoPanorama extends THREE.Texture {
    constructor(video: HTMLVideoElement);
  }
}
