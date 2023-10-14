import React from 'react';
import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import classes from './Tech.module.scss';
import { Canvas } from '@react-three/fiber';

const Tech = () => {
  return (
    <div className={classes.BallContent}>
      {
        technologies.map((technology) => (
          <div key={technology.name} className={classes.Ball}>
            {/* 設置樣式 */}
            <BallCanvas icon={technology.icon}></BallCanvas>
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, '');