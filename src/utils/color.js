import Color from "color";

export const colorWithLowOpacity = (color) => {
  const color1 = Color(color).alpha(0.25);
  return color1;
};
