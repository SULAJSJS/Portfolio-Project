import React from 'react';
import classes from '../../styles/services-item.module.css';

const ServicesItem = ({ title, icon }) => {
  return (
    <>
      <div className={`${classes.service__item}`}>
        <span>
          <i className={icon}></i>
        </span>

        <h5>{title}</h5>
      </div>
      <div className={`${classes.service__item}`}>
        <h4 style={{ textAlign: 'center', background: 'none', color: 'grey' }}>Навыки</h4>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            background: 'none',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <p style={{ background: 'none', color: '#fff' }}>HTML</p>
          <p style={{ background: 'none', color: '#fff' }}>Css/Scss</p>
          <p style={{ background: 'none', color: '#fff' }}>JavaScript</p>
          <p style={{ background: 'none', color: '#fff' }}>React</p>
          <p style={{ background: 'none', color: '#fff' }}>MUI</p>
          <p style={{ background: 'none', color: '#fff' }}>Redux</p>
          <p style={{ background: 'none', color: '#fff' }}>Firebase</p>
        </div>
      </div>
    </>
  );
};

export default ServicesItem;
