import { Canvas } from '@react-three/fiber';
import { Interface } from './Interface';
import { Experience } from './Experience';
import './App.css';
import './Project.css';
import {
  ScrollControls,
  Scroll,
  useScroll,
  OrbitControls,
} from '@react-three/drei';
import { useEffect, useState } from 'react';
import { ScrollManager } from './ScrollManager';
import { Menu } from './Menu';
import { MotionConfig } from 'framer-motion';
import { Leva } from 'leva';
import { Helmet } from 'react-helmet';
import Loader from './Loader';
import CameraManager from './CameraManager';

function App() {
  const [showDiv, setShowDiv] = useState(false);
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [buttonOn, setButton] = useState(false);
  const [rotationOn, setRotationOn] = useState(false);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = () => {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    };
    fetch();
  }, []);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sura.et</title>
        <link rel="canonical" href="https://surepos.github.io/myweb/" />
      </Helmet>
      <MotionConfig
        transition={{
          type: 'spring',
          mass: 5,
          stiffness: 500,
          restDelta: 0.001,
        }}>
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <CameraManager section={section} />

          {section === 1 && (
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={1.5}
              minAzimuthAngle={-Math.PI / 4}
              maxAzimuthAngle={Math.PI / 4}
            />
          )}

          <ScrollControls pages={5} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />

            <Scroll>
              <Experience
                section={section}
                buttonOn={buttonOn}
                setButton={setButton}
                rotationOn={rotationOn}
                setRotationOn={setRotationOn}
                value={value}
                setValue={setValue}
                showDiv={showDiv}
                setShowDiv={setShowDiv}
              />
            </Scroll>
            <Scroll html>
              {loading ? (
                <Loader />
              ) : (
                <Interface
                  section={section}
                  setSection={setSection}
                  buttonOn={buttonOn}
                  setButton={setButton}
                  value={value}
                  setValue={setValue}
                  showDiv={showDiv}
                  setShowDiv={setShowDiv}
                />
              )}
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          section={section}
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
          loading={loading}
          setLoading={setLoading}
        />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
