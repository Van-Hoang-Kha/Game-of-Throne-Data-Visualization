export const navLinks = [
  {
    label: "Home",
    pathname: "/",
    hash: "#intro",
  },
  {
    label: "Data_Visualization",
    pathname: "/",
    hash: "personality",
  },
  {
    label: "The_Web_Of_Westeros",
    pathname: "/",
    hash: "relationship",
  },
];

/**
 * Blur clickable element on mouseup to hide focus states from
 * users with pointer devices
 */
export function blurOnMouseUp(event) {
  event.currentTarget.blur();
}
