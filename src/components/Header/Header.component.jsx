import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav } from 'tabler-react';

const Header = () => {
    const _date = new Date();
    const formattedDate = `${_date.getDate()}.${_date.getMonth() +
        1}.${_date.getFullYear()}`;

    return (
        <React.Fragment>
            <div className='header'>
                <Container>
                    <Nav>
                        <Nav.Item LinkComponent={Link} to='/'>
                            Home
                        </Nav.Item>
                        <Nav.Item LinkComponent={Link} to='/country-stats'>
                            Länder
                        </Nav.Item>
                    </Nav>
                </Container>
            </div>
            <div className='jumbotron jumbotron-fluid'>
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
            </div>
        </React.Fragment>
    );
};

export default Header;
