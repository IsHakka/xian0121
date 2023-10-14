import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import classes from './SectionWrapper.module.scss';

// 需要帶入組件，組件名
const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section className={classes.Layout}
                variants={staggerContainer()} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }}>
                <span id={idName}>&nbsp;</span>
                <Component></Component>
            </motion.section>
        )
    }

export default SectionWrapper;