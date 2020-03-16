import React from 'react';
import { Container, Grid } from 'tabler-react';

import StatsDailyTotal from '../components/StatsDailyTotal/StatsDailyTotal.component';

const DashboardPage = () => (
    <React.Fragment>
        <Container>
            <Grid.Row>
                <StatsDailyTotal />
            </Grid.Row>
        </Container>
    </React.Fragment>
);

export default DashboardPage;
