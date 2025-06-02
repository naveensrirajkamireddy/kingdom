import { Redirect, Route } from "react-router";

interface AuthenticationProps {
  component: React.ComponentType<any>;
  [key: string]: any;
}
console.log("AuthenticationRoute file loaded");
const AuthenticationRoute: React.FC<AuthenticationProps> = ({
  component: Component,
  ...rest
}) => {
  const isAuthenticated = !!sessionStorage.getItem("isLoggedIn");
  console.log("isAuthenticated", isAuthenticated)
  return (
    <Route
      {...rest}
      render={(props: any) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={"/home"} />
      }
    />
  );
};

export default AuthenticationRoute;
