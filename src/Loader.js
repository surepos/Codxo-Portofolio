import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function Loader() {
  const container = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./load.json'),
    });
    return () => {
      animationInstance.destroy();
    };
  }, []);

  return (
    <div className="loader" ref={loaderRef}>
      <div className="svg-wrapper" ref={container}></div>
    </div>
  );
}

export default Loader;