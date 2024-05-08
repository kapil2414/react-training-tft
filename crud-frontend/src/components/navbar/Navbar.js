import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TranslateIcon from '@mui/icons-material/Translate';
import { logout } from '../../redux/actions/userActions';
import { useTranslation } from 'react-i18next';
import i18n from '../../utils/translation';

const Navbar = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const userInfo = userLogin.userInfo;
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <AppBar position="static" style={{ background: '#2196F3' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                    EMS Application
                </Typography>
                {userInfo && userInfo.name && (
                    <Typography variant="body1" sx={{ marginRight: '10px', fontWeight: 'bold', color: '#FFF', borderRadius: '5px', padding: '5px', background: '#4CAF50', transition: 'background 0.3s' }}>
                        {userInfo.name}
                    </Typography>
                )}
                <Button component={Link} to="/" color="inherit">{t('home')}</Button>
                <IconButton
                    onClick={handleMenuOpen}
                    color="inherit"
                    aria-controls="language-menu"
                    aria-haspopup="true"
                >
                    <TranslateIcon />
                </IconButton>
                <Menu
                    id="language-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
                    <MenuItem onClick={() => changeLanguage('he')}>हिंदी</MenuItem>
                </Menu>
                {userInfo && (
                    <>
                        <Button component={Link} to="/about" color="inherit">{t('about')}</Button>
                        <Button component={Link} to="/employee" color="inherit">{t('employeeSection')}</Button>
                        <Button color="inherit" onClick={handleLogout}>{t('logout')}</Button>
                    </>
                )}
                {!userInfo && (
                    <Button component={Link} to="/login" color="inherit">{t('login')}</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
