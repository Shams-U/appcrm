import { useState } from 'react';
import {Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import {Link} from 'react-router-dom'; // Add links to navigate to different pages
import { tokens } from '../theme'; 


// Icons imported
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'; // Dashboard icon
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'; // Calendar icon
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined'; //Contacts icon
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'; // Communications icon
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';  // Sales icon
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined'; // Add Lead icon
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'; // Clients icon
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined'; // Projects icon
import HailOutlinedIcon from '@mui/icons-material/HailOutlined'; // Consultants icon
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'; // Menu icon
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'; // Logout icon
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'; // Help icon

// Navbar Icons
const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem 
            active={selected === title}
            style={{color: colors.grey[100]}}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} /> 
        </MenuItem>
    )
};

const Navbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');

    return (
        <Box position={'fixed'}
            sx={{
                '& .pro-sidebar-inner': {
                    background: `${colors.white[400]} !important` // Changes color of sidebar, Overriding themes
                }, 
                '& .pro-icon-wrapper': {
                    backgroundColor: `${colors.purpleAccent[100]} !important` // Changes color of icons to transparent
                },
                '& .pro-inner-item': {
                    padding: '5px 35px 5px 20px !important',
                },
                '& .pro-inner-item:hover': {
                    color: "#E31937 !important", // Changes color of icons to red when hovered
                },
                '& .pro-menu-item.active': {
                    color: `${colors.primary[400]} !important`,
                },

            }}
        >
           
            <Sidebar collapsed={isCollapsed}>
                <Menu iconShape="square" height="100%">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: '10px 0 20px 0',
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed && ( //If it's not collapsed, show the logo
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <img src="../../assets/logo_cgi_color.png" width="100%"></img>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* Menu Items */}
                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item 
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Add Lead"
                            to="/addlead"
                            icon={<PersonAddOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Contacts"
                            to="/contacts"
                            icon={<PermContactCalendarOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />                    
                        <Item 
                            title="Clients"
                            to="/clients"
                            icon={<BusinessCenterOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Sales"
                            to="/sales"
                            icon={<InsertChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Projects"
                            to="/projects"
                            icon={<AssignmentLateOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Consultants"
                            to="/consultants"
                            icon={<HailOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Communications"
                            to="/communications"
                            icon={<MessageOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />                                                                                                                                                
                            
                    </Box>

                    <Box paddingLeft={isCollapsed ? undefined : '10%'} verticalAlign={"bottom"} style={{margin: '13.5rem 0 1.5rem 0'}}
                    >
                        <Item 
                            title="Support"
                            to="/support"
                            icon={<HelpOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Logout"
                            to="/login"
                            icon={<LogoutOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </Sidebar>
            {/* Sidebar */}
        </Box>
    )
};

export default Navbar;