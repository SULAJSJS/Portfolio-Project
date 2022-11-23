import React from 'react';
import SectionSubtitle from './SectionSubtitle';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../../public/images/For Sula.jpg';
import classes from '../../styles/hero.module.css';

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Привет" />
              <h2 className="mt-3 mb-3">Меня зовут Султанбек </h2>
              <h5 className="mb-4">Frontend разработчик</h5>
              <p>
                Делаю сайты, люблю когда появляется новая проблема, <br />
                ведь только так можно прогрессивно развиваться!
              </p>
              <div className="mt-5">
                <button className="primary__btn-1">
                  <Link target="_blank" href="https://t.me/Sulaj">
                    Найми меня
                  </Link>
                </button>

                <button className="secondary__btn">
                  <Link
                    href="https://drive.google.com/file/d/1T4n15ELTPko6LR9FAGxf0DmGjYCUsiiu/view?usp=share_link"
                    download
                    target="_blank">
                    Скачать резюме
                  </Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              <div className={`${classes.hero__skills}`}>
                <h6>Скиллы</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div className={`${classes.hero__experience} d-flex align-items-center gap-3`}>
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Опыт работы</h6>
                  <h5 className="mb-0">1.5 year</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
