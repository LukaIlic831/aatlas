import * as React from "react";
import { NavigateFunction } from "react-router-dom";

interface IFooterMobileButtonProps {
  navigate: NavigateFunction;
}

const FooterMobileButton: React.FunctionComponent<IFooterMobileButtonProps> = (
  props
) => {
  return (
    <div
      className="mobile-button"
      onClick={() => props.navigate("/create-post")}
    >
      <div className="mobile-button__icon">
        <svg
          stroke="white"
          fill="white"
          strokeWidth="0.5"
          viewBox="0 0 16 16"
          height="1.8em"
          width="1.8em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
        </svg>
      </div>
    </div>
  );
};

export default FooterMobileButton;
