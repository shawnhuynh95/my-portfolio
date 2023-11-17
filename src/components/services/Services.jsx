import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  // const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate={isInView && "animate"}
      animate="animate"
      ref={ref}
    >
      <motion.div className="top" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="mid" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="bottom" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            fuga, animi laudantium nostrum, vel maxime atque nobis aspernatur
            minima inventore, harum necessitatibus laboriosam odio. Sed ullam
            quo facilis recusandae eveniet?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            fuga, animi laudantium nostrum, vel maxime atque nobis aspernatur
            minima inventore, harum necessitatibus laboriosam odio. Sed ullam
            quo facilis recusandae eveniet?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            fuga, animi laudantium nostrum, vel maxime atque nobis aspernatur
            minima inventore, harum necessitatibus laboriosam odio. Sed ullam
            quo facilis recusandae eveniet?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            fuga, animi laudantium nostrum, vel maxime atque nobis aspernatur
            minima inventore, harum necessitatibus laboriosam odio. Sed ullam
            quo facilis recusandae eveniet?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
