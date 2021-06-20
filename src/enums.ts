const toObject = (list: Array<string>) =>
  Object.freeze(list.reduce((p, val) => Object.assign(p, { [val]: val }), {}));

const enumRouteHome = '/siamese-thai';
const enumRouteOrder = '/siamese-thai/order';
const enumRouteLunch = '/siamese-thai/lunch-special';
const enumRouteMenu = '/siamese-thai/menu';
const enumRouteContact = '/siamese-thai/contact';

declare global {
  var uriMenu: string; // eslint-disable-line
}

const enumUriMenu = globalThis.uriMenu || './menu.json';

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
