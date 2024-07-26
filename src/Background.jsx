import { Sphere, Environment, Stars } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useScroll } from '@react-three/drei';
import { gsap } from 'gsap';
import { useFrame } from '@react-three/fiber';
import { Gradient } from 'lamina';

export const Background = () => {
  const material = useRef();
  const color = useRef({ color: '#222831' });
  const data = useScroll();
  const timeLine = useRef();

  useFrame(() => {
    // Ensure data.scroll is defined before accessing current
    if (data.scroll && data.scroll.current !== undefined && timeLine.current) {
      timeLine.current.progress(data.scroll.current);
      material.current.color = new THREE.Color(color.current.color);
    }
  });

  useEffect(() => {
    timeLine.current = gsap.timeline();
    timeLine.current.to(color.current, {
      color: '#222831',
    });
    timeLine.current.to(color.current, {
      color: '#00203F',
    });
    timeLine.current.to(color.current, {
      color: '#03346E',
    });
    timeLine.current.to(color.current, {
      color: '#02162e',
    });
  }, []);

  return (
    <group>
      <Sphere scale={40}>
        <meshBasicMaterial
          ref={material}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
};
