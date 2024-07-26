import { useAnimation, motion, delay } from 'framer-motion';
import React from 'react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Projects from './Projects';
import RangeSlider from './RangeSlider';
import Contact from './Contact';
import sparkle from "./models/sparkle.png"
import star from "./models/star.png"
export const Interface = (props) => {
  const { section, setSection } = props;
  const { buttonOn, setButton } = props;
  const { value, setValue } = props;
  const { showDiv, setShowDiv } = props;

  return (
    <>
      <About setSection={setSection} />
      <RangeSlider value={value} setValue={setValue} />

      <Skills
        section={section}
        buttonOn={buttonOn}
        setButton={setButton}
        showDiv={showDiv}
        setShowDiv={setShowDiv}
      />

      <Projects />
      <Contact />
    </>
  );
};

const About = (props) => {
  const { setSection } = props;
  return (
    <motion.section className="about">
      <motion.div
        className="main-about">
        <div className="about-texts">
          <div className="description">
            <div className="sparkle-content">
              <motion.div className="sparkle-top"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              transition:{
                duration:0.5,
                delay:2
              } }
              }>
                <img src={sparkle} alt="stars" />
              </motion.div>
              <motion.div
                className="name-intro"
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}>
                Hi. I'm Sura.
              </motion.div>
              <motion.div
                className="wrapper"
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.5,
                  },
                }}>
                <p className="services">
                  <img src={star} alt="stars" />A <span></span>
                </p>
              </motion.div>
              <motion.div className="sparkle-bottom"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              transition:{
                duration:0.5,
                delay:2
              } }
              }>
                <img src={sparkle} alt="stars" />
              </motion.div>
            </div>
            <motion.div
              initial={{
                y: 50,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 1,
                },
              }}>
              I am{' '}
              <span>
                <img src="./models/me.jpg" alt="" />
              </span>{' '}
              Sura, a web developer passionate about creating innovative,
              AI-powered web solutions <span className="span">.</span>
            </motion.div>

            <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 1.5,
              },
            }}>
              <button
                className="contact-button"
                onClick={() => setSection(3)}>
                <span>See My Works</span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
const CircularProgress = ({ title, level, section }) => {
  const [progressStartValue, setProgressStartValue] = useState(0);
  const progressEndValue = level;
  const speed = 50;
  const [ref, inView] = useInView({});

  const controls = useAnimation();

  useEffect(() => {
    let progress;

    if (inView) {
      setProgressStartValue(0);
      progress = setInterval(() => {
        setProgressStartValue((prevValue) => {
          const newValue = prevValue + 1;

          if (newValue === progressEndValue) {
            clearInterval(progress);
          }

          return newValue;
        });
      }, speed);
    }

    return () => clearInterval(progress);
  }, [progressEndValue, speed, inView]);

  const conicGradientStyle = {
    background: `conic-gradient(#1139bd ${
      progressStartValue * 3.6
    }deg, #ededed 0deg)`,
  };

  return (
    <div className="circular-container" ref={ref}>
      <div style={{ ...conicGradientStyle }} className="circular-progress">
        <div className="progress-value">{`${progressStartValue}%`}</div>
      </div>
      <span className="text">{title}</span>
    </div>
  );
};

const skills = [
  {
    title: 'Python',
    level: 90,
    icon: 'fa-brands fa-python',
    color: '#4584b6',
  },
  {
    title: 'JavaScript',
    level: 80,
    icon: 'fa-brands fa-js',
    color: '#F0DB4F ',
  },
  {
    title: 'Nodejs',
    level: 85,
    icon: 'fa-brands fa-node-js',
    color: '#3C873A ',
  },
  {
    title: 'React',
    level: 60,
    icon: 'fa-brands fa-react',
    color: ' #61dbfb',
  },
];
const professionals = [
  {
    title: 'Creativity',
    level: 90,
  },
  {
    title: 'Communication',
    level: 70,
  },
  {
    title: 'Curiosity',
    level: 87,
  },
  {
    title: 'Team-work',
    level: 50,
  },
];

const Skills = (props) => {
  const { section } = props;
  const { buttonOn, setButton } = props;
  const { showDiv, setShowDiv } = props;
  useEffect(() => {
    if (buttonOn) {
      // Wait for 2 seconds before showing the div
      const timeoutId = setTimeout(() => {
        setShowDiv(true);
      }, 3000);

      // Cleanup the timeout to avoid memory leaks
      return () => clearTimeout(timeoutId);
    } else {
      setShowDiv(false);
    }
  }, [buttonOn]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        alignItems: 'start',
        justifyContent: 'center',
      }}
      className="skill-section">
      {showDiv && (
        <motion.div
          whileInView={'visible'}
          initial={{
            scaleY: showDiv ? 0 : 1,
            originY: 0,
          }}
          variants={{
            visible: {
              scaleY: showDiv ? 1 : 0,
              transition: {
                duration: 1,
              },
            },
          }}
          className="skills">
          <motion.div whileInView={'visible'} className="technical-skills">
            <div className="top-bar">
              <div className="image-place">
                <img src="models/me-bg.png" alt="Sura" />
              </div>
              <div className="info-place">
                <div>
                  <p>Name</p>
                  <p>Sura</p>
                </div>
                <div>
                  <p>Age</p>
                  <p>22</p>
                </div>
                <div>
                  <p>From</p>
                  <p>Ethiopia</p>
                </div>
              </div>
            </div>
            {/* <h1>Skills</h1> */}
            <div className="skills-box">
              {/* <h1>Skills</h1> */}
              {skills.map((skill, index) => (
                <div className="each-skill" key={index}>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}>
                    <i
                      className={skill.icon}
                      style={{ color: `${skill.color}` }}></i>
                    {/* <h3>{skill.title}</h3> */}
                  </motion.div>

                  <div className="full-bar">
                    <motion.div
                      className="level-bar"
                      style={{ width: `${skill.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 1 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div whileInView={'visible'} className="pro-skills">
            {/* <h1>Other Skills</h1> */}

            <div className="grid-container">
              {professionals.map((pro, index) => (
                <CircularProgress
                  section={section}
                  key={index}
                  title={pro.title}
                  level={pro.level}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};
