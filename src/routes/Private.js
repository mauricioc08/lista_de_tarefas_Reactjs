import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../fireBaseConnections";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    async function checkLogin() {
      const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
          const userData = {
            uid: user.displayName,
            email: user.email,
          };
          localStorage.setItem("@detailUser", JSON.stringify(userData));

          setLoading(false);
          setSigned(true);
        } else {
          setLoading(false);
          setSigned(false);
        }
      });
    }
    checkLogin();
  }, []);

  if (loading) {
    return (
      <div className="load">
        <div className="loading"></div>
      </div>
    );
  }

  if (!signed) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Private;
