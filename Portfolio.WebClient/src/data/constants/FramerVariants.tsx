export const animatedMainVariants = {
  hidden: {
    opacity: 0,
    translateY: "25px"
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      ease: "easeOut",
      duration: 1.5,
      delay: 0.25
    },
  },
  exit: {
    opacity: 0,
    translateY: "25px",
    transition: {
      duration: 0.5,
    },
  },
}

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
  scaleUp: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  rotate: {
    rotate: 360,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const errorIconVariants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    rotate: -360,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  exit: {
    scale: 0,
    rotate: 180,
    transition: {
      duration: 0.5,
    },
  },
};
