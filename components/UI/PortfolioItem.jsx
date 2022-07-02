import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";
import Link from "next/link";

const PortfolioItem = (props) => {
  const { title, img, keyword } = props.item;
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
        <Image alt="portfolio-img" src={img} width="380" height="250" />
      </div>

      <div className={`${classes.portfolio__live}`}>
        <button className="primary__btn-1">
          <Link href='https://github.com/SULAJSJS/Cap-Shop'>Посмотреть</Link>
        </button>
        {/* <button className="primary__btn-2">
          <Link href='https://github.com/SULAJSJS/Cap-Shop'>Посмотреть</Link>
        </button>
        <button className="primary__btn-3">
          <Link href='https://github.com/SULAJSJS/Cap-Shop'>Посмотреть</Link>
        </button> */}
      </div>
    </div>
  );
};

export default PortfolioItem;
