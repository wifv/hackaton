import { useLocation } from "react-router-dom"
import { paths } from "../../Export"
import PanoramaViewer from "./PanoramaViewer"
import { useEffect, useState } from "react";

const Panorama = () => {
  const [panoramaPath, setPanoramaPath] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const modelIndex = Number(location.pathname.split('/').pop()) || 0;
    setPanoramaPath(paths[modelIndex]);
  }, [location]);


  if (!panoramaPath) {
    return;
  }

  return (
    <div className={'panorama'}>
      <PanoramaViewer pathToImage={`${panoramaPath}`}/>
    </div>
  )
}

export default Panorama
