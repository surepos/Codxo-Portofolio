import { Home } from './Home';
import { motion } from 'framer-motion-3d';

import { Avatar } from './Avatar';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Background } from './Background';
import { Incubator } from './Incubator';
import * as THREE from 'three';

export const Experience = (props) => {
  const { section } = props;
  const { buttonOn, setButton } = props;
  const { rotationOn, setRotationOn } = props;
  const { value, setValue } = props;
  const { showDiv, setShowDiv } = props;

  useEffect(() => {
    setTimeout(()=>{
      setShowDiv(false);
      setButton(false);
    }, 1000)
   
  }, [section]);

  const { viewport } = useThree();
  const characterContainer = useRef();

  const incubatorGroup = useRef();
  const targetPosition = new THREE.Vector3();
  const targetRotation = new THREE.Euler();

  useEffect(() => {
    if (incubatorGroup.current) {
      if (window.innerWidth < 800) {
        incubatorGroup.current.position.set(-7, -17.9, 3);
      } else {
        incubatorGroup.current.position.set(-3, -17.9, 3);
      }
      incubatorGroup.current.rotation.set(-0.2, Math.PI - 2.1, -0.05);
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts
  
  useFrame(() => {
    if (!incubatorGroup.current) return;
  
    if (showDiv) {
      window.innerWidth < 800
        ? targetPosition.set(-7, -17.9, 3)
        : targetPosition.set(-3, -17.9, 3);
      targetRotation.set(-0.2, Math.PI - 2.1, -0.05);
    } else {
      targetPosition.set(0, -17.5, 3);
      targetRotation.set(-0.2, 0, 0);
    }
  
    incubatorGroup.current.position.lerp(targetPosition, window.innerWidth < 800 ? 0.01 : 0.1);
    incubatorGroup.current.rotation.x += (targetRotation.x - incubatorGroup.current.rotation.x) * (window.innerWidth < 800 ? 0.01 : 0.1);
    incubatorGroup.current.rotation.y += (targetRotation.y - incubatorGroup.current.rotation.y) * (window.innerWidth < 800 ? 0.01 : 0.1);
    incubatorGroup.current.rotation.z += (targetRotation.z - incubatorGroup.current.rotation.z) * (window.innerWidth < 800 ? 0.01 : 0.1);
  });
  

  const [characterAnimation, setCharacterAnimation] = useState('Typing');
  useEffect(() => {
    setCharacterAnimation('Falling');
    setTimeout(() => {
      setCharacterAnimation(section === 1 ? 'Typing' : 'Typing');
    }, 400);
  }, [section]);

  return (
    <>
      <Background />
      <group
        scale={window.innerWidth < 500 ? 0.7 : 1}
        position-y={window.innerWidth < 500 ? -3 : ''}>
        <motion.group
          position={[
            -0.620905669536915,
            0.2619163670338383 - 8.2,
            3.9140268375961,
          ]}
          rotation={[-3.141592653589793, 0, -3.141592653589793]}
          scale={[1.8, 1.66, 1.8]}
          animate={'' + section}
          transition={{
            duration: 0.6,
          }}
          variants={{
            1: {},
          }}>
          <Avatar
            animation={characterAnimation}
            position={window.innerWidth < 500 ? " " : ' '}
          />
        </motion.group>

        <ambientLight intensity={1} />
        <motion.group
          position={[0, -8.4, 3]}
          scale={[0.6, 0.665, 0.6]}
          rotation-y={1.575 + (value * 6.3) / 360}
          animate={{
            y: section === 1 ? -8.4 : -9.4,
          }}>
          <Home />
        </motion.group>
      </group>
      <group ref={incubatorGroup}>
        <Incubator
          buttonOn={buttonOn}
          setButton={setButton}
          rotationOn={rotationOn}
          setRotationOn={setRotationOn}
          scale={[1.2, 1.1, 1.2]}
        />
      </group>
    </>
  );
};
