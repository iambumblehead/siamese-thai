type MenuItemType = {
  id: number;
  name: string;
  price: number;
  menuItemTypes: string[];
  en_labelWide: string[];
  en_labelNarrow: string[];
};

type MenuItemListType = Array<MenuItemType>;

type MenuJSONType = {
  menuSections: {
    menuItemType: string;
    en_description: string;
  };
  menuItems: MenuItemListType;
};

type MenuSectionType = {
  sectionName: string;
  menuItems: Array<MenuItemType>;
};

type MenuSectionListType = Array<MenuSectionType>;

export type {
  MenuJSONType,
  MenuItemType,
  MenuItemListType,
  MenuSectionType,
  MenuSectionListType
};
