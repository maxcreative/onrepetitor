// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  console.log({ children });
  return (
    <main className="flex justify-center flex-col mt-10">
      {children}
    </main>
  );
}

export default Layout;

