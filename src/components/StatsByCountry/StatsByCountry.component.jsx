import React from 'react';
import { Card, Alert, Table } from 'tabler-react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import useDataApi from '../../services/useStatsData';

const StatsByCountry = () => {
    const API_URL = process.env.REACT_APP_API_URL;
    const { data, isLoading, isError, isLoadingDone } = useDataApi(
        `${API_URL}/countries`
    );

    return (
        <React.Fragment>
            <Container>
                <Row>
                    {isError && <Alert variant='danger'>{isError}</Alert>}
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <h3 className='card-title'>
                                    Statistiken nach Land
                                </h3>
                            </Card.Header>
                            <Table
                                responsive
                                striped
                                className='card-table table-vcenter'
                            >
                                <Table.Header>
                                    <tr>
                                        <th>Land</th>
                                        <th className='text-right'>
                                            Bestätigte Fälle
                                        </th>
                                        <th className='text-right'>
                                            Fälle <small>(Heute)</small>
                                        </th>
                                        <th className='text-right'>
                                            Todesfälle
                                        </th>
                                        <th className='text-right'>
                                            Todesfälle <small>(Heute)</small>
                                        </th>
                                        <th className='text-right'>Genesen</th>
                                        <th className='text-right'>
                                            Kritischer Zustand
                                        </th>
                                    </tr>
                                </Table.Header>
                                <Table.Body>
                                    {isLoading ? (
                                        <tr className='position-relative p-3 text-center'>
                                            <td colSpan='7'>
                                            <Spinner
                                                animation='border'
                                                role='status'
                                            >
                                                <span className='sr-only'>
                                                    Loading...
                                                </span>
                                            </Spinner>
                                            </td>
                                        </tr>
                                    ) : (
                                        isLoadingDone &&
                                        Object.keys(data).map((item, i) => (
                                            <Table.Row key={i}>
                                                <td>{data[item].country}</td>
                                                <td className='text-right'>
                                                    {data[item].cases}
                                                </td>
                                                <td className='text-right'>
                                                    {data[item].todayCases}
                                                </td>
                                                <td className='text-right text-red'>
                                                    {data[item].deaths}
                                                </td>
                                                <td className='text-right text-red'>
                                                    {data[item].todayDeaths}
                                                </td>
                                                <td className='text-right text-green'>
                                                    {data[item].recovered}
                                                </td>
                                                <td className='text-right text-yellow'>
                                                    {data[item].critical}
                                                </td>
                                            </Table.Row>
                                        ))
                                    )}
                                </Table.Body>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default StatsByCountry;
