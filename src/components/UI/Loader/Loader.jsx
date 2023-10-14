import React from 'react';
import { Html, useProgress } from '@react-three/drei';
import classes from './Loader.module.scss';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      {/* 載入模型 */}
      <p className={classes.LoadingText}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader 