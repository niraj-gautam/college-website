export interface MenuItem {
  name: string;
  href: string;
}

export interface DropdownItem {
  name: string;
  items?: MenuItem[];
  href?: string;
}
