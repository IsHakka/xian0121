import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import classes from './Contact.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSubmit } from '../../reducers/VisitorSlice';

const Contact = () => {

  const state = useSelector(state => state.visitor);
  const dispatch = useDispatch();

  const nameValue = useRef();
  const emailValue = useRef();
  const messageValue = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameValue.current.value;
    const email = emailValue.current.value;
    const message = messageValue.current.value;
    dispatch(setSubmit({
      name, email, message
    }))
  }

  return (
    <div className={classes.Layout}>
      <div className={classes.Container}>
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className={classes.FormGroup}>
          <p className={classes.Introduction}>Get in touch</p>
          <h2 className={classes.Overview}>Contact</h2>
          <form className={classes.Form}>
            <label>
              <span >Your Name</span>
              {/* 雙向綁定 */}
              <input type="text" name="name" ref={nameValue} placeholder='請輸入您的姓名' />
            </label>
            <label>
              <span >Your Email</span>
              {/* 雙向綁定 */}
              <input type="text" name="email" ref={emailValue} placeholder='請輸入您的電子信箱' />
            </label>
            <label>
              <span >Your Message</span>
              {/* 雙向綁定 */}
              <textarea type="text" name="message" ref={messageValue} placeholder='請輸入您的意見' />
            </label>
            <button onClick={submitHandler} className={classes.SentValue}>sent</button>

          </form>
        </motion.div>
        <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className={classes.EarthModal}>
          <EarthCanvas></EarthCanvas>
        </motion.div>

      </div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')