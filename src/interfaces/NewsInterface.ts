import { Dispatch, SetStateAction } from "react";

interface SetSelectedItem extends Dispatch<SetStateAction<string>> {}

export interface NavigationBarProps {
  selectedItem: string;
  setSelectedItem: SetSelectedItem;
}
