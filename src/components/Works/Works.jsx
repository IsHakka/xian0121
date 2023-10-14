import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { github } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import classes from './Work.module.scss';
import ProjectCard from './ProjectCard/ProjectCard';

const Works = () => {
  return (
    <>
      <div className={classes.Layout}>
        <motion.div variants={textVariant()}>
          <p className={classes.Introduction}>My work</p>
          <h2 className={classes.Overview}>Projects.</h2>
        </motion.div>
        <div className={classes.Box}>
          <motion.p className={classes.List} variants={fadeIn('', 1, 1)}>
          The following items showcase my skills and experience. These projects encompass my regular practice as well as real-world projects I've undertaken in my work. They reflect my ability to solve complex problems, apply various technologies, and effectively manage projects.
          </motion.p>
        </div>
        <div className={classes.Content}>
          {
            projects.map((projects, index) => (
              <ProjectCard key={`project-${index}`} {...projects} index={index}></ProjectCard>
            ))
          }
        </div>
      </div>

    </>

  )
}

export default SectionWrapper(Works, '')