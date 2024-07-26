import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CameraManager = ({ section }) => {
  const { camera } = useThree();
  const initialCameraPosition = useRef(camera.position.clone());
  const initialCameraRotation = useRef(camera.rotation.clone());

  useEffect(() => {
    if (section !== 1) {
      // Smoothly reset camera position and rotation when leaving section 1
      gsap.to(camera.position, {
        x: initialCameraPosition.current.x,
        y: initialCameraPosition.current.y,
        z: initialCameraPosition.current.z,
        duration: 1,
        ease: 'power3.inOut',
      });

      gsap.to(camera.rotation, {
        x: initialCameraRotation.current.x,
        y: initialCameraRotation.current.y,
        z: initialCameraRotation.current.z,
        duration: 1,
        ease: 'power3.inOut',
      });
    }
  }, [section, camera]);

  return null;
};

export default CameraManager;
