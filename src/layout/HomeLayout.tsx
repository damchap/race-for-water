import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Navbar from '../components/Navbar';

const HomeLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Home Layout
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <Navbar />
        </div>
    );
};

export default HomeLayout;
