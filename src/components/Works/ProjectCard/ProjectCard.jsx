import React from 'react';
import classes from './ProjectCard.module.scss';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../utils/motion';
import { Tilt } from 'react-tilt';
import { github } from '../../../assets';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
            <Tilt className={classes.CardContainer} options={{ max: 45, scale: 1, speed: 450 }}>
                <div className={classes.CardBox}>
                    <img src={image} alt={name}  className={classes.Image}/>

                    <div className={classes.GitHubIcon}>
                        <div onClick={()=>window.open(source_code_link,'_blank')} className={classes.Icon}>
                            <img src={github} alt="github" className={classes.GitHub}/>
                        </div>
                    </div>
                </div>

                <div className={classes.Des}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>

                <div className={classes.TagGroup}>
                    {
                        tags.map(tag => (
                            <p key={tag.name} className={`classes.Tag ${tag.color}`}>
                                #{tag.name}
                            </p>
                        ))
                    }
                </div>
            </Tilt>
        </motion.div>
    );
};
export default ProjectCard;