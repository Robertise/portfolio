/*
  Scroll utility functions
*/

export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    // Update URL hash
    window.history.pushState({}, '', `/#${elementId}`);
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
