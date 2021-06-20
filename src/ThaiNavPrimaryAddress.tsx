import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

const ThaiNavPrimaryAddress: React.FC = () => {
  const classes = useStyles();

  return (
    <address className={classes.link}>
      1544 Foothill Blvd,
      <br /> La Verne 91750
      <br />
      <a href="tel:909-593-7097">(909) 593-7097</a>
    </address>
  );
};

export default ThaiNavPrimaryAddress;
