import React from 'react';
import { Grid, Card, Alert, Dimmer } from 'tabler-react';

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

    const includeKeys = ['cases', 'deaths', 'recovered'];

    return (
        <React.Fragment>
            {isError && <Alert variant='danger'>{isError}</Alert>}
            {isLoading ? (
                <Grid.Col
                    sm={12}
                    className='position-relative p-3 justify-content-center align-items-center d-flex flex-row'
                >
                    <Dimmer active loader>
                        <span className='sr-only'>Loading...</span>
                    </Dimmer>
                </Grid.Col>
            ) : (
                isLoadingDone &&
                Object.keys(data)
                    .filter(key => includeKeys.includes(key))
                    .map((item, idx) => (
                        <Grid.Col sm={12} md={4} key={idx}>
                            <Card>
                                <Card.Body>
                                    <div className='h5'>
                                        {columnInfo[item]?.title}
                                    </div>
                                    <div className='display-4 font-weight-bold mb-4'>
                                        <span
                                            className={`${columnInfo[item]?.text}`}
                                        >
                                            {data[item]}
                                        </span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Grid.Col>
                    ))
            )}
        </React.Fragment>
    );
};

export default StatsDailyTotal;
