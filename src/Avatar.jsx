import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import dinaol from "./models/dinaol.glb"
import typing from "./animations/Typing.fbx"
import standing from "./animations/Standing.fbx"
import falling from "./animations/Falling Idle.fbx"

export function Avatar(props) {
  const { animation } = props;
  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: false,
    wireframe: false,
  });
  const group = useRef();
  const { nodes, materials } = useGLTF(dinaol);

  const { animations: typingAnimation } = useFBX(typing);
  const { animations: standingAnimation } = useFBX(standing);
  const { animations: fallingAnimation } = useFBX(falling);

  typingAnimation[0].name = 'Typing';
  standingAnimation[0].name = 'Standing';
  fallingAnimation[0].name = 'Falling';

  const anims = useMemo(() => [typingAnimation[0], standingAnimation[0], fallingAnimation[0]], []);

  const { actions } = useAnimations(anims, group);

  useFrame((state) => {
    if (headFollow) {
      const head = group.current.getObjectByName('Head');
      if (head) {
        head.lookAt(state.camera.position);
      }
    }
    if (cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      const spine2 = group.current.getObjectByName('Spine2');
      if (spine2) {
        spine2.lookAt(target);
      }
    }
  });

  useEffect(() => {
    if (actions && actions[animation]) {
      actions[animation].reset().fadeIn(1).play();
      return () => {
        if (actions[animation]) {
          actions[animation].fadeOut(1);
        }
      };
    } else {
      console.error(`Animation '${animation}' not found`);
    }
  }, [animation, actions]);

  useEffect(() => {
    if (materials) {
      Object.values(materials).forEach((material) => {
        material.wireframe = wireframe;
      });
    }
  }, [wireframe, materials]);

  return (
    <group {...props} ref={group} dispose={null}>
      <group>
        <primitive object={nodes.Hips} />
        {Object.keys(nodes).map((key) => {
          const node = nodes[key];
          if (node.isSkinnedMesh) {
            return (
              <skinnedMesh
                key={key}
                name={node.name}
                geometry={node.geometry}
                material={materials[node.material.name]}
                skeleton={node.skeleton}
                morphTargetDictionary={node.morphTargetDictionary}
                morphTargetInfluences={node.morphTargetInfluences}
                frustumCulled={false}
              />
            );
          }
          return null;
        })}
      </group>
    </group>
  );
}

useGLTF.preload(dinaol);
