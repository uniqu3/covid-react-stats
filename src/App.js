import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'tabler-react/dist/Tabler.css';

import StatsDailyTotal from './components/StatsDailyTotal/StatsDailyTotal.component';
import StatsByCountry from './components/StatsByCountry/StatsByCountry.component';

import './App.css';

function App() {
    const _date = new Date();
    const formattedDate = `${_date.getDate()}.${_date.getMonth() +
        1}.${_date.getFullYear()}`;

    return (
        <React.Fragment>
            <Jumbotron fluid>
                <Container>
                    <small className='float-right font-weight-bold d-inline-block text-small text-right'>
                        {formattedDate}
                    </small>
                    <h1>COVID-19 - Coronavirus Statistiken</h1>
                    <p>
                        Aktuelle Informationen zum Coronavirus (Bezeichnung der
                        Erkrankung: COVID-2019 / Bezeichnung des Erregers:
                        SARS-CoV-2)
                    </p>
                </Container>
            </Jumbotron>
            <StatsDailyTotal />
            <StatsByCountry />
            <footer className='footer'>
                <Container>
                    <Row>
                        <Col sm={12} className='text-center'>
                            Made with ❤️ by Goran Ilic -{' '}
                            <a
                                href='https:ichmachdas.eu'
                                rel='noopener noreferrer'
                            >
                                idea arts kreativagentur
                            </a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    );
}

export default App;
