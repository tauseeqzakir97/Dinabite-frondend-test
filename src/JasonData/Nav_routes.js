import Pie_Icon_color from "../asset/images/pie_chart_color.svg";
import Pie_Icon_gray from "../asset/images/pie_chart_gray.svg";

import Star_Icon_gray from "../asset/images/star_gray.svg";
import Star_Icon_color from "../asset/images/star_color.svg";

import Tool_Icon_color from "../asset/images/tools_color.svg";
import Tool_Icon_gray from "../asset/images/tools_gray.svg";

import Ana_Icon_color from "../asset/images/analytics_color.svg";
import Ann_Icon_gray from "../asset/images/analytics_gray.svg";

import Store_Icon_color from "../asset/images/store_color.svg";
import Store_Icon_gray from "../asset/images/store_gray.svg";

import Note_Icon_color from "../asset/images/note_color.svg";
import Note_Icon_gray from "../asset/images/note_gray.svg";

export const menu_icon_array_1 = [
  {
    id: 1,
    display_name: "Dashboard",
    route: "/",
    icon: Store_Icon_color,
    white: Store_Icon_gray,
  },
  {
    id: 2,
    display_name: "Tools",
    route: "/tools",
    icon: Tool_Icon_color,
    white: Tool_Icon_gray,
  },
  {
    id: 3,
    display_name: "Posts",
    route: "/posts",
    icon: Note_Icon_color,
    white: Note_Icon_gray,
  },
  {
    id: 4,
    display_name: "Promotions",
    route: "/promotions",
    icon: Ann_Icon_gray,
    white: Ana_Icon_color,
  },
  {
    id: 5,
    display_name: "Reviews",
    route: "/reviews",
    icon: Star_Icon_color,
    white: Star_Icon_gray,
  },
  {
    id: 6,
    display_name: "Analytics",
    route: "/analytics",
    icon: Pie_Icon_color,
    white: Pie_Icon_gray,
  },
];
