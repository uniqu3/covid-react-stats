import React from 'react';
import { Container, Grid } from 'tabler-react';

import StatsDailyTotal from '../components/StatsDailyTotal/StatsDailyTotal.component';
import StatsTotalByCountry from '../components/StatsTotalByCountry/StatsTotalByCountry.component';

const DashboardPage = () => (
    <React.Fragment>
        <Container>
            <Grid.Row>
                <StatsDailyTotal />
            </Grid.Row>
        </Container>
        <Container>
            <Grid.Row>
                <StatsTotalByCountry country='austria' />
            </Grid.Row>
        </Container>
    </React.Fragment>
);

export default DashboardPage;
