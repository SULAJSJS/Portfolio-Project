import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/portfolio.module.css';
import PortfolioItem from './PortfolioItem';

import portfolioData from '../data/portfolio';

const Portfolio = () => {
  const [filter, setFilter] = useState('Web Design');
  const [data, setData] = useState();

  useEffect(() => {
    setData(portfolioData);
  }, []);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="Моё портфолио" />
            <h4 className="mt-4">А вот и мои проекты</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={`secondary__btn text-white`}
                onClick={() => setFilter('Web Design')}>
                Web Design
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col className={classes.block} lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
