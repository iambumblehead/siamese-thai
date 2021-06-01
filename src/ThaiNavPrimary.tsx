import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import ThaiNavPrimaryDrawer from './ThaiNavPrimaryDrawer';
import ThaiNavPrimaryMenu from './ThaiNavPrimaryMenu';
import ThaiLinkLogo from './ThaiLinkLogo';

const useStyles = makeStyles((theme) => ({
  menu: {
    flexGrow: 1,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  menuBox: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'grey',
    alignItems: 'center',
    padding: '12px'
  },
  menuBoxBurger: {
    flexGrow: 1,
    textAlign: 'right',
    '@media (min-width:640px)': {
      display: 'none'
    }
  }
}));

const ThaiNavPrimary: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const [drawerIsOpen, drawerIsOpenSet] = React.useState(false);

  useEffect(() => {
    if (drawerIsOpen) {
      drawerIsOpenSet(false);
    }
  }, [location.pathname]);

  return (
    <Paper square className={classes.menu}>
      <Box className={classes.menuBox}>
        <ThaiLinkLogo />
        <ThaiNavPrimaryMenu type="menuBoxTabs" />
        <Box className={classes.menuBoxBurger}>
          <IconButton onClick={() => drawerIsOpenSet(!drawerIsOpen)}>
            <Menu />
          </IconButton>
        </Box>
      </Box>
      <ThaiNavPrimaryDrawer
        isOpen={drawerIsOpen}
        onOpen={() => drawerIsOpenSet(true)}
        onClose={() => drawerIsOpenSet(false)}
      >
        <ThaiNavPrimaryMenu type="drawerTabs" />
      </ThaiNavPrimaryDrawer>
    </Paper>
  );
};

export default ThaiNavPrimary;
