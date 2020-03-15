import React from 'react';
import { Card, Alert } from 'tabler-react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import useDataApi from '../../services/useStatsData';

const StatsDailyTotal = () => {
    const API_URL = process.env.REACT_APP_API_URL;
    const { data, isLoading, isError, isLoadingDone } = useDataApi(
        `${API_URL}/all`
    );

    const columnInfo = {
        cases: {
            text: 'text-yellow',
            title: 'Bestätigte Fälle',
        },
        deaths: {
            text: 'text-red',
            title: 'Todesfälle',
        },
        recovered: {
            text: 'text-green',
            title: 'Genesene Personen',
        },
    };

    return (
        <React.Fragment>
            <Container>
                <Row>
                    {isError && <Alert variant='danger'>{isError}</Alert>}
                    {isLoading ? (
                        <Col
                            sm={12}
                            className='position-relative p-3 justify-content-center align-items-center d-flex flex-row'
                        >
                            <Spinner animation='border' role='status'>
                                <span className='sr-only'>Loading...</span>
                            </Spinner>
                        </Col>
                    ) : (
                        isLoadingDone &&
                        Object.keys(data).map((item, idx) => (
                            <Col sm={12} md={4} key={idx}>
                                <Card>
                                    <Card.Body>
                                        <div className='h5'>
                                            {columnInfo[item].title}
                                        </div>
                                        <div className='display-4 font-weight-bold mb-4'>
                                            <span
                                                className={`${columnInfo[item].text}`}
                                            >
                                                {data[item]}
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default StatsDailyTotal;
