export const experienceContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const currentExperienceContainer = {
  hidden: {},
  show: {
    transition: {
      ease: "easeOut",
      duration: 1,
      staggerChildren: 0.15,
    },
  },
};

export const skillsListContainer = {
  hidden: {},
  show: {
    transition: {
      ease: "easeOut",
      duration: 1,
      staggerChildren: 0.15,
    },
  },
};

export const itemContainer = {
  hidden: {
    scale: 0.5,
    zIndex: -100,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

export const fadeUpChild = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 50,
  },
};

export const fadeInChild = {
  hidden: {
    opacity: 0,
    display: "none",
  },
  show: {
    opacity: 1,
    display: "inline-flex",
  },
};

export const loadingIconVariants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
    rotate: -360,
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
};
