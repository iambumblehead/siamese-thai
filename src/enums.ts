const toObject = (list: Array<string>) =>
  Object.freeze(list.reduce((p, val) => Object.assign(p, { [val]: val }), {}));

const enumRouteHome = '/';
const enumRouteOrder = '/order';
const enumRouteLunch = '/lunch-special';
const enumRouteMenu = '/menu';
const enumRouteContact = '/contact';

declare const uriMenu: string;

const enumUriMenu = uriMenu;

const enumRoutes = toObject([
  enumRouteHome,
  enumRouteOrder,
  enumRouteLunch,
  enumRouteMenu,
  enumRouteContact
]);

export {
  enumRouteHome,
  enumRouteOrder,
  enumRouteLunch,
  enumRouteMenu,
  enumRouteContact,
  enumRoutes,
  enumUriMenu
};
