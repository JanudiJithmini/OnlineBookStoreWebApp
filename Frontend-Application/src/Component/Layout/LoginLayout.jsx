import React from "react";

const LoginLayout = () => {
  return (
    <div>
      <SignUp />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
