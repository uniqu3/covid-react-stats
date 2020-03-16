import React from 'react';

import { Container, Grid } from 'tabler-react';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className='footer'>
                <Container>
                    <Grid.Row>
                        {/* prettier-ignore */}
                        <Grid.Col sm={12} className='text-center'>
                            Made with <span role='img' aria-label='love'> ❤️ </span>
                            by Goran Ilic - <a href='https://ichmachdas.eu' rel='noopener noreferrer'>idea arts kreativagentur</a>
                        </Grid.Col>
                    </Grid.Row>
                </Container>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
