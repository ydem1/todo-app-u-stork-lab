export interface INavigationItem {
  id: number;
  label: string;
  href: string;
}

export type INavigationItemProps = Omit<INavigationItem, "id">;
