import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem className='Services-Items' title="Разработка Сайтов" icon="ri-computer-line" />
              </div>
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="Что я могу" />
            <h3 className="mb-0 mt-4">Неплохой программист,</h3>
            <h3 className="mb-4">С опытом в 8 месяцев</h3>
            <p>
              Я могу четко свертстать сайт, сделав его при этом  адаптивным,<br/>
              а также в конце написать логику всего сайта.<br/>Ну а если говорить короче, то я могу сделать полную фронтальную часть сайта
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
