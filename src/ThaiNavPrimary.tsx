import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ThaiNavPrimary = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <div>
        <Link to="/">{t('home')}</Link>
      </div>
      <div>
        <Link to="/user/:id">{t('user')}</Link>
      </div>
    </nav>
  );
};

export default ThaiNavPrimary;
