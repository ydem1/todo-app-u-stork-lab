import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface INavigationItem {
  id: number;
  label: string;
  href: string;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
}

export type INavigationItemProps = Omit<INavigationItem, "id">;
