import { ReactElement } from "react";

const yellowColor = "#f3c333ff";

export const uncheckedIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="none" />
  </svg>
) as ReactElement;

export const checkedIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle
      cx="12"
      cy="12"
      r="6"
      stroke={yellowColor}
      strokeWidth="10"
      fill="none"
    />
    <circle cx="12" cy="12" r="5" fill="black" />
  </svg>
) as ReactElement;
