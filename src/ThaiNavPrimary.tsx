import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import ThaiNavPrimaryAddress from './ThaiNavPrimaryAddress';
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
    alignItems: 'center',
    padding: '0 12px'
  },
  menuBoxAddress: {
    position: 'absolute',
    top: '70px'
  },
  menuBoxBurger: {
    flexGrow: 1,
    textAlign: 'right',
    '@media (min-width:890px)': {
      display: 'none'
    }
  },
  menuBoxBurgerButtonMenu: {
    fontSize: '30px'
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
        <div className={classes.menuBoxAddress}>
          <ThaiNavPrimaryAddress />
        </div>
        <ThaiNavPrimaryMenu type="menuBoxTabs" />
        <Box className={classes.menuBoxBurger}>
          <IconButton onClick={() => drawerIsOpenSet(!drawerIsOpen)}>
            <Menu className={classes.menuBoxBurgerButtonMenu} />
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
