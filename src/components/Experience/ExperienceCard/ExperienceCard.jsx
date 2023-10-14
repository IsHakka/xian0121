import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import classes from './ExperienceCard.module.scss';

const ExperienceCard = ({ experience }) => {
    return (
        // 設置架構
        <VerticalTimelineElement contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{borderRight:'7px solid #232631'}} date={experience.date} iconStyle={{background:experience.iconBg}}
        icon={<div className={classes.Item}><img src={experience.icon} alt={experience.company_name} className={classes.Icon}/></div>}>
            <div className={classes.Header}>
                <h3 className={classes.Title}>{experience.title}</h3>
                <p className={classes.CompanyName}>{experience.company_name}</p>
            </div>
            <ul className={classes.List}>
            {experience.points.map((point,index)=>(
                <li key={`experience-point-${index}`} className={classes.Text}>{point}</li>
            ))}
            </ul>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;