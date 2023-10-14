import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { textVariant } from '../../utils/motion';
import classes from './Experience.module.scss';
import ExperienceCard from './ExperienceCard/ExperienceCard';

const Experience = () => {
  return (
    <div className={classes.Layout}>
      <motion.div variants={textVariant()}>
        <p className={classes.Introduction}>After graduating from university, I...</p>
        <h2 className={classes.Overview}>Work Experience</h2>
      </motion.div>
      <div className={classes.ExperienceList}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}></ExperienceCard>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, 'work')