import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode); //determines color based on dark or light mode themes.
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2} backgroundColor={colors.primary[400]} position={"fixed"} top={0} left={250} width={"100%"} //style={{margin: '13.5rem 0 1.5rem 0'}}
        // position={"fixed"} top={0} left={250} width={"calc(100%)"} boxSizing={"border-box"} //FIX THIS TO GET THE TOP BAR IN THE RIGHT SPOT
        >
        {/* Search Bar */}
            <Box 
                display='flex' 
                backgroundColor={colors.grey[300]} m
                borderRadius="3px"
                sx={{margin: '0.1rem 0 0.1rem 17rem', width: '15%'}}
            >
                {/* Input section for search */}
                <InputBase sx={{ml: 2, flex: 1}} placeholder="Search" />
                <IconButton type="button" sx={{p: 1}}>
                    <SearchIcon />
                </IconButton>
            </Box>
        {/* ICONS */}
            <Box display={'flex'} >
                {/* Theme Toggle Button */}
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                {/* Notifications */}
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                {/* Settings */}
                <IconButton>    
                    <SettingsOutlinedIcon />
                </IconButton>
                {/* User Icon */}
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>

            <IconButton></IconButton> 

        </Box>
    )
};

export default Topbar;