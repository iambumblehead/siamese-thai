import type { MenuJSONType } from './types';
import { enumUriMenu } from './enums';

const getMenuJSON = (uri = enumUriMenu): Promise<MenuJSONType> => {
  return fetch(uri).then((data) => data.json());
};

export { getMenuJSON };
