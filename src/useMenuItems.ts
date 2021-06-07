import React, { useState, useEffect } from 'react';
import { getMenuJSON } from './req';
import type { MenuJSONType } from './types';

type useMenuItemsType = [string, MenuJSONType | undefined];

const useMenuItems = (): useMenuItemsType => {
  const [menuJSON, menuJSONSet] = useState<MenuJSONType>();
  const [error, errorSet] = useState('');

  useEffect((): ReturnType<React.EffectCallback> => {
    getMenuJSON()
      .then((items) => {
        menuJSONSet(items);
      })
      .catch(() => {
        errorSet('error requesting menu');
      });
  }, []);

  return [error, menuJSON];
};

export default useMenuItems;
