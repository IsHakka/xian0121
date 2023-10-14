import React from 'react';
import { motion } from 'framer-motion';
import classes from './About.module.scss';
import { services } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import ServiceCard from './ServiceCard/ServiceCard';
import { SectionWrapper } from '../../hoc';


const About = () => {
  return (
    <div className={classes.Layout}>
      <motion.div variants={textVariant()}>
        <p className={classes.Introduction}>Introduction</p>
        <h2 className={classes.Overview}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className={classes.SelfIntroduction}>
        My name is Xian, and I am a front-end developer who specializes in React. I have extensive experience working with this popular JavaScript library and excel at using React to create modern, high-performance web applications
        ! By the way, I have previously served as a project manager and UI/UX designer.      </motion.p>
      <div className={classes.Card}>
        {
          services.map((service, index) =>
            <ServiceCard key={service.title} index={index} {...service} />
          )
        }
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about');