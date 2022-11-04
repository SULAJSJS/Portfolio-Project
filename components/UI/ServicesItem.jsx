import React from 'react';
import classes from '../../styles/services-item.module.css';
import firebase from '../../public/images/icons/firebase.png';
import css from '../../public/images/icons/css.png';
import html from '../../public/images/icons/html.png';
import git from '../../public/images/icons/git.png';
import react from '../../public/images/icons/react.png';
import javascript from '../../public/images/icons/javascript.png';
import redux from '../../public/images/icons/redux.png';
import tailwind from '../../public/images/icons/tailwind.png';
import mui from '../../public/images/icons/mui.png';

const list = [
  { title: 'HTML', icon: html.src },
  { title: 'Css/Scss', icon: css.src },
  { title: 'JavaScript', icon: javascript.src },
  { title: 'React', icon: react.src },
  { title: 'Material UI', icon: mui.src },
  { title: 'Redux', icon: redux.src },
  { title: 'Firebase', icon: firebase.src },
  { title: 'Tailwind.css', icon: tailwind.src },
  { title: 'Git', icon: git.src },
];

const ServicesItem = () => {
  return (
    <>
      <div className={`${classes.service__item}`}>
        <h3 style={{ textAlign: 'center', background: 'none', color: 'grey' }}>Навыки</h3>
        <div className={classes.abilities}>
          {list.map((item, i) => (
            <div className={`${classes.abilitiesItem}`} key={i}>
              <img src={item.icon} alt="icon" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesItem;
