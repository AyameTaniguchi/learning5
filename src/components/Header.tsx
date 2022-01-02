import { AppBar, Toolbar, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Button from '@material-ui/core/Button';
import { useLocation, useHistory } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}));

function Header() {
    const classes = useStyles();
    const location = useLocation<{ name: string }>();
    const history = useHistory();

    // const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setAuth(event.target.checked);
    // };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        history.goBack();
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    <Button variant="contained" >投稿</Button>
                </Typography>
                ようこそ {location.state.name} さん
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>ログアウト</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default Header
