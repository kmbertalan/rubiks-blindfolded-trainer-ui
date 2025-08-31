import React, { useEffect, useRef } from "react";

interface CubeViewerProps {
  algorithm: string;
  size?: number;
}

const CubeViewer: React.FC<CubeViewerProps> = ({ algorithm, size = 400 }) => {
  const cubeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.cubing.net/v0/js/cubing/twisty";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (cubeRef.current) {
      cubeRef.current.setAttribute("alg", algorithm);
    }
  }, [algorithm]);

  return React.createElement("twisty-player", {
    ref: cubeRef,
    "control-panel": "none",
    background: "checkered-transparent",
    style: { width: `${size}px`, height: `${size}px` },
    alg: algorithm,
  });
};

export default CubeViewer;
