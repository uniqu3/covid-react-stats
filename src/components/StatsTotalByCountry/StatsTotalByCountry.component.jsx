import React from 'react';
import { Grid, Card, Alert, Dimmer } from 'tabler-react';

import useDataApi from '../../services/useStatsData';

const StatsTotalByCountry = ({ country }) => {
    const API_URL = process.env.REACT_APP_API_URL;
    const { data, isLoading, isError, isLoadingDone } = useDataApi(
        `${API_URL}/countries/${country}`
    );

    return (
        <React.Fragment>
            {isError && (
                <Alert type='danger' icon='alert-triangle'>
                    {isError}
                </Alert>
            )}
            <Grid.Col width={12}>
                <Card>
                    <Card.Header>Fälle in Österreich</Card.Header>
                    <Card.Body>
                        {isLoading ? (
                            <div className='position-relative p-3 justify-content-center align-items-center d-flex flex-row'>
                                <Dimmer active loader>
                                    <span className='sr-only'>Loading...</span>
                                </Dimmer>
                            </div>
                        ) : (
                            isLoadingDone && (
                                <Grid.Row>
                                    <Grid.Col width={12} md={4}>
                                        <div className='h5'>
                                            Bestätigte Fälle
                                        </div>
                                        <div className='mb-4'>
                                            <span className='display-4 font-weight-bold'>
                                                {data.cases}
                                            </span>
                                            <small className='d-block sm text-warning'>
                                                Heute {data.todayCases}
                                            </small>
                                        </div>
                                    </Grid.Col>
                                    <Grid.Col width={12} md={4}>
                                        <div className='h5'>Todesfälle</div>
                                        <div className='mb-4'>
                                            <span className='display-4 font-weight-bold'>
                                                {data.deaths}
                                            </span>
                                            <small className='d-block sm text-danger'>
                                                Heute {data.todayDeaths}
                                            </small>
                                        </div>
                                    </Grid.Col>
                                    <Grid.Col width={12} md={4}>
                                        <div className='h5'>
                                            Genesene Personen
                                        </div>
                                        <div className='mb-4'>
                                            <span className='display-4 font-weight-bold'>
                                                {data.recovered}
                                            </span>
                                        </div>
                                    </Grid.Col>
                                </Grid.Row>
                            )
                        )}
                    </Card.Body>
                </Card>
            </Grid.Col>
        </React.Fragment>
    );
};

export default StatsTotalByCountry;
