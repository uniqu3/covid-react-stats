import React from 'react';
import { Container, Grid } from 'tabler-react';

import StatsByCountry from '../components/StatsByCountry/StatsByCountry.component';

const CountryStatsPage = () => (
    <React.Fragment>
        <Container>
            <Grid.Row>
                <StatsByCountry />
            </Grid.Row>
        </Container>
    </React.Fragment>
);

export default CountryStatsPage;
