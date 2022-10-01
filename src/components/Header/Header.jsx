import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
    <AppBar position="static" >
        <Toolbar className={classes.toolbox} >
            <Typography variant ='h5' className={classes.title} >
            Travel Advisor
            </Typography>
            <Box display= "Flex" >
                <Typography variant="h6" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Autocomplete>
                    <div className={classes.container}>
                        <div className = {classes.SearchIcon}>
                        <SearchIcon /> 

                    </div>
                    <InputBase placeholder='Search..' classes={{ root: classes.InputRoot, input: classes.InputInput}}>`

                    </InputBase>
                    </div>
                   
                </Autocomplete>
                </Box>



           


        </Toolbar>

    </AppBar>
    );
} 

export default Header;