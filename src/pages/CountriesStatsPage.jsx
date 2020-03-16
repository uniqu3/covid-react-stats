import React from 'react';
import { Container, Grid } from 'tabler-react';

import StatsCountriesTotal from '../components/StatsCountriesTotal/StatsCountriesTotal.component';

const CountriesStatsPage = () => (
    <React.Fragment>
        <Container>
            <Grid.Row>
                <StatsCountriesTotal />
            </Grid.Row>
        </Container>
    </React.Fragment>
);

export default CountriesStatsPage;
