import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../img/Logotipo.png'
import icon from "../img/user.png"
import { Link as LinkRouter } from "react-router-dom"
import User from '../img/user.png'
import { connect } from 'react-redux';
import userActions from "../redux/actions/userActions"
import '../styles/navBar.css'




const pages = [
  <LinkRouter className="buttonNav" to="home">Home</LinkRouter>,
  <LinkRouter className="buttonNav" to="cities">Cities</LinkRouter>

];
const settings = [
  <LinkRouter className="buttonNav" to="SignIn">SignIn</LinkRouter>,
  <LinkRouter className="buttonNav" to="SignUp">SignUp</LinkRouter>
];

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    SignOut()
    setAnchorElUser(null);
  };
  function SignOut(){

    console.log("funcion llamada")
    props.SignOutUser(props.user.email)

  }
  
  return (
    <AppBar className='nav1' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography >
            <img src={Logo} alt="Logo" width={100} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="warning"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <div>

<IconButton className="usuario-btn" onClick={handleOpenUserMenu} sx={{ p: 2 }}>
  <Avatar className="usuario-btn"  src={props.user? props.user.photo:icon} alt="usuario" />
</IconButton>
</div>

            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {props.user ? (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><LinkRouter className='buttomlink1' onClick={SignOut}to={"#"}>SignOut</LinkRouter></Typography>
                </MenuItem>
                ) : (

                  <div>
                    <MenuItem  onClick={handleCloseUserMenu}>
                    <Typography  textAlign="center"><LinkRouter className='buttomlink1' to={"/signup"}>Sign Up</LinkRouter></Typography>
                    </MenuItem>

                    <MenuItem  onClick={handleCloseUserMenu}>
                    <Typography textAlign="center"><LinkRouter className='buttomlink1' to={"/signin"}>Sign  In</LinkRouter></Typography>
                    </MenuItem>
                  </div>
                )
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = {
  SignOutUser: userActions.SignOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveAppBar);