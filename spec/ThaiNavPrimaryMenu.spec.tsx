import test from 'ava';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import enzyme from 'enzyme';

import ThaiNavPrimaryMenu from '../src/ThaiNavPrimaryMenu';

// interface CustomNodeJsGlobal extends NodeJS.Global {
//   uriMenu: string;
// }
// declare const global: CustomNodeJsGlobal;
// global.uriMenu = '/menu.json';

test('ThaiNavPrimaryMenu, renders', (t) => {
  const component = enzyme.mount(
    <MemoryRouter>
      <ThaiNavPrimaryMenu />
    </MemoryRouter>
  );

  // component.find('.Dropdown-control').simulate('mousedown', { button: 0 });

  t.regex(component.html(), /div/);
  component.unmount();
});
