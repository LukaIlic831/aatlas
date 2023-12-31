import * as React from "react";
import SignUpError from "./Home Comps/SignUpError";
import ButtonLoader from "../ButtonLoader";
import signUpFeatures from "../../features/auth/signUp";
import { togglePassword } from "../../utils/showHidePassword";

interface ISignUpProps {
  setSignUpVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSignInVisible: React.Dispatch<React.SetStateAction<boolean>>;
  blockRef: React.MutableRefObject<HTMLDivElement | null>;
}

const SignUp: React.FunctionComponent<ISignUpProps> = (props) => {
  const [passwordType, setPasswordType] = React.useState<string>("password");
  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [signUpError, setSignUpError] = React.useState<string | boolean>(false);
  return (
    <div className="auth__wrapper">
      <div className="auth-block" ref={props.blockRef}>
        <div className="auth-block__para">
          <div className="auth-block__para--title">
            <h1>Sign Up</h1>
          </div>
          {signUpError && <SignUpError signUpError={signUpError as string} />}
          <form
            className="auth-block__para--form"
            onSubmit={(e) =>
              signUpFeatures.handleSignUp(
                e,
                email,
                password,
                username,
                props.setSignUpVisible,
                setSignUpError
              )
            }
          >
            <div className="auth-block__para--form-block">
              <p>Username</p>
              <input
                type="text"
                maxLength={200}
                placeholder="Enter Username"
                required
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="auth-block__para--form-block">
              <p>Email Address</p>
              <input
                type="email"
                maxLength={200}
                placeholder="Enter Email Address"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="auth-block__para--form-block">
              <p>Password</p>
              <input
                type={passwordType}
                placeholder="Enter Password"
                required
                onChange={(event) => setPassword(event.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                className="show-password"
                viewBox="0 0 24 24"
                fill="none"
                onClick={() => togglePassword(passwordType, setPasswordType)}
              >
                <path
                  d="M2 2L22 22"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="auth-block__para--form-button">
              <button type="submit">Sign Up</button>
            </div>
            <div className="auth-block__para--form-para">
              <p>
                Already have an account?{" "}
                <span
                  onClick={() =>
                    signUpFeatures.openSignIn(
                      props.setSignInVisible,
                      props.setSignUpVisible
                    )
                  }
                >
                  Sign In
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
