import { Redirect, Route } from "react-router";

interface AuthenticationProps {
  component: React.ComponentType<any>;
  [key: string]: any;
}
const AuthenticationRoute: React.FC<AuthenticationProps> = ({
  component: Component,
  ...rest
}) => {
  const isAuthenticated = !!sessionStorage.getItem("isLoggedIn");
  console.log("checking auth", isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props: any) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={"/login"} />
      }
    />
  );
};

export default AuthenticationRoute;
