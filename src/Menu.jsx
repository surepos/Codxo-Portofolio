import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion';
import { useState } from "react";
import "./App.css";
import me from "./models/me.jpg"


export const Menu = (props) => {
  
  const [currentActive, setCurrentActive] = useState(0);

    const navigationItems = [
        { id: 0, icon: 'person-outline' },
        { id: 1, icon: 'home-outline' },
        { id: 2, icon: 'cog-outline' },
        { id: 3, icon: 'briefcase-outline' },
        { id: 4, icon: 'chatbubble-outline' }
    ];
    const handleClick = (index) => {
      onSectionChange(index);
  }

  
  const { section, onSectionChange } = props;
  return (
    <>
     <div className="nav-container">
        <div className="navbar">
          <img src={me} alt="Sura" />
          <button
            className= "button-container" >
              CV
          
          </button>
        </div>
      </div>
      {!props.loading&&<AnimatePresence mode="wait">
      <motion.div 
     initial={{ opacity: 0, x: 50, }}
     whileInView={{
       opacity: 1,
       x: 0,
       transition: {
         duration: 2,
         delay: 0.6,
       }}}
      className="side-bar">
        
       
        <div className="App">
            <div className="navigation">
                <ul>
                    {navigationItems.map(item => (
                        <li 
                            key={item.id} 
                            className={section === item.id ? "active" : ""} 
                            onClick={() => handleClick(item.id)}
                        >
                            <a href="#">
                                <span className='icon'><ion-icon name={item.icon}></ion-icon></span>
                            </a>
                        </li>
                    ))}
                    <div className="indicator"><span></span></div>
                    <div className='mover'></div>
                </ul>
                <svg viewBox="0 0 202.9 45.5">
                    <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
                        <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3
                                c5-2.9,9.2-5.2,15.2-7c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7
                                c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5c9.2,3.6,17.6,4.2,23.3,4H6.7z" />
                    </clipPath>
                </svg>

            </div>
        </div>
        
        
      </motion.div>
      </AnimatePresence>
}
      
    </>
  );
};

