import { useScroll } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { gsap } from "gsap"

export const ScrollManager = (props) => {
 const { section, onSectionChange } = props;

 const data = useScroll();
 const lastScroll = useRef(0);
 const isAnimating = useRef(false);

 data.fill.classList.add("fix");
 useEffect(() => {
  function onScroll(event) {
    if (isAnimating.current) {
      return ;
    }
    isAnimating.current = true;
    if (event.deltaY < 0)
      {
        onSectionChange((section) => section > 0 ? section - 1 : 0);
      }
      else if (event.deltaY > 0)
      {
        onSectionChange((section) => section === 4 ? 4 : section + 1);
      }
  }
  window.addEventListener('wheel', onScroll);
  return () => window.removeEventListener('wheel', onScroll);
}, []);


  

 useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
 }, [section]);

 const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      handleUpClick();
    } else if (event.key === 'ArrowDown') {
      handleDownClick();
    }
 };

 const handleUpClick = () => {
    onSectionChange((section) => section > 0 ? section - 1 : 0);
 };

 const handleDownClick = () => {
    onSectionChange((section) => section === 4 ? 4 : section + 1);
 };

 useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
 }, []);


 



useEffect(() => {
  if (!isMobile()) {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }
}, []);

// Helper function to detect mobile devices
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}





useEffect(() => {
  let startY;

  const onTouchStart = (event) => {
    startY = event.touches[0].pageY;
  };

  const onTouchEnd = (event) => {
    if (isAnimating.current) {
      return;
    }
    isAnimating.current = true;
    const endY = event.changedTouches[0].pageY;
    const deltaY = endY - startY;
    if (Math.abs(deltaY) > 50) { // adjust the threshold value as needed
      if (deltaY > 0) {
        onSectionChange((section) => section > 0 ? section - 1 : 0);
      } else {
        onSectionChange((section) => section === 4 ? 4 : section + 1);
      }
    }
    setTimeout(() => {
      isAnimating.current = false;
    }, 500);
  };

  window.addEventListener('touchstart', onTouchStart);
  window.addEventListener('touchend', onTouchEnd);
  return () => {
    window.removeEventListener('touchstart', onTouchStart);
    window.removeEventListener('touchend', onTouchEnd);
  };
}, []);
 return null;
};

