import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "../contexts/ThemeContext";
import Background from "../components/Background";
import Header from "./Header";
import Intro from "./Intro";
import ScrollSpy from "./ScrollSpy";
import Home from "../pages/Home";

let introSeenThisSession = false;

const LayoutContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const skipIntro = Boolean(location.state?.skipIntro);

  const [showIntro, setShowIntro] = useState(() => {
    return !skipIntro && !introSeenThisSession;
  });

  useEffect(() => {
    if (skipIntro) {
      introSeenThisSession = true;
      setShowIntro(false);
      navigate(location.pathname, { replace: true, state: {} });
      return;
    }

    setShowIntro(!introSeenThisSession);
  }, [skipIntro, navigate, location.pathname]);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
}, [showIntro]);

  const handleAnimationComplete = () => {
    introSeenThisSession = true;
    setTimeout(() => {
      setShowIntro(false);
    }, 500);
  };

  return (
    <div className="relative min-h-screen bg-(--bg-primary) transition-colors duration-300">
      {/* Background */}
      <Background />

      {/* Header */}
      <Header />

      {/* Scroll Spy Navigation */}
      <ScrollSpy />

      {/* Main Content */}
      <Home />

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
              background: "var(--bg-primary)",
              zIndex: 9999,
              scrollBehavior: "none",
            }}
          >
            <Intro onComplete={handleAnimationComplete} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Layout = () => {
  return (
    <ThemeProvider>
      <LayoutContent />
    </ThemeProvider>
  );
};

export default Layout;
