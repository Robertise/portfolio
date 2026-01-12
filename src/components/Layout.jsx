import { Outlet } from 'react-router-dom' 
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import Background from "../components/Background";
import Header from './Header';
import Intro from './Intro';


const Layout = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleAnimationComplete = () => { 
    setTimeout(() => {
      setShowIntro(false);
    }, 500);
  };


  return (
    <div className="relative min-h-screen bg-[#111422]">   
      {/* Background */}
      <Background />

      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <Outlet/>  

      {/* Intro overlay - fades out after animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "var(--background-dark)",
              zIndex: 9999,
            }}
          >
            <Intro onComplete={handleAnimationComplete} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;