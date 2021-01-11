export const navLinks = [
  {
    label: "Home",
    pathname: "/",
    hash: "",
  },
  {
    label: "Personality",
    pathname: "/",
    hash: "#personality",
  },
  {
    label: "Presence",
    pathname: "/",
    hash: "#presence",
  },
  {
    label: "Relationships",
    pathname: "/",
    hash: "#relationships",
  },
];

/**
 * Blur clickable element on mouseup to hide focus states from
 * users with pointer devices
 */
export function blurOnMouseUp(event) {
  event.currentTarget.blur();
}
