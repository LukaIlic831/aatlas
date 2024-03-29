import * as React from "react";
import { Link, Location, NavigateFunction } from "react-router-dom";
import signOut from "../../../features/auth/signOut";

interface IProfileBlockProps {
  id: string;
  profileBlockRef: React.MutableRefObject<HTMLUListElement | null>;
  navigate: NavigateFunction;
  location: Location<any>;
}

const ProfileBlock: React.FunctionComponent<IProfileBlockProps> = (props) => {
  return (
    <ul className="nav__profile--list" ref={props.profileBlockRef}>
      <li className="nav__profile--list-item">
        <Link to={`/profile/${props.id}`}>
          <div className="nav__profile--list-item-link">
            <div className="nav__profile--list-item-link-icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
              </svg>
            </div>
            <p>Profile</p>
          </div>
        </Link>
      </li>
      <li className="nav__profile--list-item">
        <div
          className="nav__profile--list-item-link"
          onClick={() => signOut(props.navigate)}
        >
          <div className="nav__profile--list-item-link-icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
              ></path>
              <path
                fillRule="evenodd"
                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              ></path>
            </svg>
          </div>
          <p>Sign Out</p>
        </div>
      </li>
    </ul>
  );
};

export default ProfileBlock;
