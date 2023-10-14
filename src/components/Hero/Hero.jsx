import React from 'react';
import { motion } from 'framer-motion';
import { ComputersCanvas } from '../canvas';
import classes from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={classes.Layout}>
      <div className={classes.Location}>
        <div className={classes.MainTitle}>
          <div className={classes.SideSlide}>
            <div className={classes.Circle}></div>
            <div className={classes.SlideShadow}></div>
          </div>
          <div className={classes.Personal}>
            <h1 className={classes.Title}>Hi , I'm <span className={classes.Name}>Xian</span></h1>
            <p className={classes.Introduce}>The best thing about a boolean is even if you are wrong, you are only off by a bit.</p>
          </div>
        </div>
      </div>

      <ComputersCanvas></ComputersCanvas>

      <div className={classes.NextPage}>
        <a href="#about">
          <div className={classes.JumpBtn}>
            <motion.div
              className={classes.Dot}
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero