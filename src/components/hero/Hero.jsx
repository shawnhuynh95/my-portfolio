import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SHAWN HUYNH</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer
            <br />
            and UI designer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See The Lastest Work
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>

          <motion.img
            src="/scroll.png"
            alt="scroll"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
        <motion.div
          className="sliderContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Writer Content Creator Influencer
        </motion.div>
        <div className="imgContainer">
          <img src="/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
