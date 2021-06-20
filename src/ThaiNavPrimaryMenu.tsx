import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs } from '@material-ui/core';
import {
  enumRouteContact,
  enumRouteLunch,
  enumRouteMenu,
  enumRouteOrder
} from './enums';

const useStyles = makeStyles(() => ({
  menuBoxTabs: {
    flexGrow: 1,
    '@media (min-width:1000px)': {
      marginRight: '80px'
    },
    '@media (max-width:999px)': {
      '& > div > div': {
        justifyContent: 'flex-end'
      }
    },
    '@media (max-width:889px)': {
      display: 'none'
    }
  },
  menuBoxTabsItem: {
    minWidth: '0px',
    fontSize: '20px',
    padding: '12px 12px'
  },
  drawerTabs: {},
  drawerTabsItem: {
    display: '',
    fontSize: '20px',
    padding: '10px 12px'
  },
  indicator: {
    '@media (max-width:889px)': {
      left: '0px'
    }
  }
}));

const ThaiNavPrimaryMenuRoutes = [
  enumRouteContact,
  enumRouteLunch,
  enumRouteMenu,
  enumRouteOrder
];

const selectedTabRe = new RegExp(`^(${ThaiNavPrimaryMenuRoutes.join('|')})$`);

export interface ThaiNavPrimaryMenuProps {
  type?: 'menuBoxTabs' | 'drawerTabs';
}

const ThaiNavPrimaryMenu: React.FC<ThaiNavPrimaryMenuProps> = ({
  type = 'menuBoxTabs'
}) => {
  const classes = useStyles();
  const location = useLocation();
  const { t } = useTranslation();

  const classTabs = classes[type];
  const classTabsItems = classes[`${type}Item` as const];
  const orientation = type === 'menuBoxTabs' ? 'horizontal' : 'vertical';

  const tabValue = selectedTabRe.test(location.pathname)
    ? location.pathname
    : false;

  return (
    <Tabs
      className={classTabs}
      classes={{
        indicator: classes.indicator
      }}
      value={tabValue}
      variant="standard"
      indicatorColor="primary"
      textColor="primary"
      orientation={orientation}
      centered
    >
      <Tab
        className={classTabsItems}
        label={t('order online to go')}
        component={Link}
        value={enumRouteOrder}
        to={enumRouteOrder}
      />
      <Tab
        className={classTabsItems}
        label={t('lunch special')}
        component={Link}
        value={enumRouteLunch}
        to={enumRouteLunch}
      />
      <Tab
        className={classTabsItems}
        label={t('menu')}
        component={Link}
        value={enumRouteMenu}
        to={enumRouteMenu}
      />
      <Tab
        className={classTabsItems}
        label={t('contact')}
        component={Link}
        value={enumRouteContact}
        to={enumRouteContact}
      />
    </Tabs>
  );
};

export default ThaiNavPrimaryMenu;
