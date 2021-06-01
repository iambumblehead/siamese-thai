import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  logo: {
    whiteSpace: 'nowrap'
  }
}));

const ThaiNavPrimary: React.FC = () => {
  const classes = useStyles();

  return (
    <Link to="/">
      <Typography className={classes.logo}>Siamese Thai</Typography>
    </Link>
  );
};

export default ThaiNavPrimary;
