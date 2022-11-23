import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/services.module.css';
import ServicesItem from './ServicesItem';

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem className="Services-Items" />
              </div>
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="Что я могу" />
            <h3 className="mb-0 mt-4">Frontend разработчик</h3>
            <h3 className="mb-4">С опытом больше 1 года</h3>
            <p>
              Я могу свертстать сайт, сделав его адаптивным,
              <br />и написать функционал всего сайта. Также на данный момент учу node.js, чтобы
              знать его на базовом уровне.
              <br />
              Хочу освоить следующий стэк: MongoDB + Express + React + Node.js
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
