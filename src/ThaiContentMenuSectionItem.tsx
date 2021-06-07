import React from 'react';
import type { MenuItemType } from './types';
import { makeStyles } from '@material-ui/core/styles';
// import { Menu } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  section: {
    display: 'flex',
    padding: '0 10px'
  },
  col1: {
    flexGrow: 1,
    maxWidth: '100%'
  },
  col2: {
    flexBasis: 'initial'
  }
}));

export interface ThaiContentMenuSectionItemProps {
  menuItem: MenuItemType;
}

const ThaiContentMenuSection: React.FC<ThaiContentMenuSectionItemProps> = ({
  menuItem
}) => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.col1}>
        <div className={classes.paper}>{menuItem.en_labelWide}</div>
      </div>
      <div className={classes.col2}>
        <div className={classes.paper}>{menuItem.price}</div>
      </div>
    </div>
  );
};

export default ThaiContentMenuSection;
