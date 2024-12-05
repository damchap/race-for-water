import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { MdPodcasts } from "react-icons/md";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { styled } from '@mui/system';

const StyledBottomNavigation = styled(BottomNavigation)({
    borderRadius: '15px',
    boxShadow: '0px 4px 20px rgba(255, 105, 180, 0.5)', // Pink box shadow
    backgroundColor: '#fff',
});

const CenterAction = styled(BottomNavigationAction)({
    '&.Mui-selected': {
        transform: 'scale(1.2)',
    },
});

const Navbar: React.FC = () => {
    const [value, setValue] = React.useState(1);

    return (
        <Paper elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <StyledBottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Podcast" icon={<MdPodcasts />} />
                <CenterAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Admin" icon={<AdminPanelSettingsIcon />} />
            </StyledBottomNavigation>
        </Paper>
    );
};

export default Navbar;