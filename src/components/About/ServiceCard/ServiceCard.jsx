import React from 'react';
import { Tilt } from 'react-tilt';
import classes from './ServiceCard.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className={classes.CardGroup}>
        <motion.div className={classes.CardItems} variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}>
          <div className={classes.Type} option={{ max: 45, scale: 1, speed: 450 }}>
            <img className={classes.Img} src={icon} alt={title} />
            <h3 className={classes.Title}>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }

export default ServiceCard;