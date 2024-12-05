import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import { Outlet } from "react-router"

const HomeLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    console.log('HomeLayout');
    console.log(children);
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
                <Outlet />
            </Container>
            <Navbar />
        </div>
    );
};

export default HomeLayout;
