import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Hidden, Drawer, Box } from '@material-ui/core';
import ThaiLinkLogo from './ThaiLinkLogo';

const useStyles = makeStyles(() => ({
  drawerHead: {
    padding: '12px',
    textAlign: 'center'
  },
  drawerHeadButton: {
    padding: '12px'
  }
}));

export interface ThaiNavPrimaryDrawerProps {
  children?: React.ReactChild | React.ReactChild[];
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const ThaiNavPrimaryDrawer: React.FC<ThaiNavPrimaryDrawerProps> = ({
  isOpen,
  onClose,
  children
}) => {
  const classes = useStyles();

  // can be swapped with js to avoid SEO duplication of links.
  return (
    <Hidden smUp implementation="css">
      <Drawer
        variant="temporary"
        anchor="right"
        open={isOpen}
        onClose={() => onClose()}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
      >
        <Box className={classes.drawerHead}>
          <IconButton
            className={classes.drawerHeadButton}
            onClick={() => onClose()}
          >
            <ThaiLinkLogo />
          </IconButton>
          {children}
        </Box>
      </Drawer>
    </Hidden>
  );
};

export default ThaiNavPrimaryDrawer;
