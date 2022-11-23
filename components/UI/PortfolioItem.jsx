import React from 'react';
import classes from '../../styles/portfolio-item.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioItem = (props) => {
  const { title, img, liveUrl, keyword, deployUrl } = props.item;
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.portfolio__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.portfolio__img}`}>
        <Image objectFit="cover" alt="portfolio-img" src={img} width="380" height="250" />
      </div>

      <div className={`${classes.portfolio__live}`}>
        <button className="primary__btn-1">
          <Link target="_blank" href={liveUrl}>
            Посмотреть код
          </Link>
        </button>
        <button className="primary__btn-1">
          <Link target="_blank" href={deployUrl}>
            Посмотреть сайт
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
