import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none'
  },
  linklogo: {
    fontSize: '32px',
    color: 'rgb(128,0,128)',
    whiteSpace: 'nowrap',
    padding: '6px 0'
  }
}));

const ThaiNavPrimary: React.FC = () => {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.link}>
      <Typography className={classes.linklogo}>Siamese Thai</Typography>
    </Link>
  );
};

export default ThaiNavPrimary;
