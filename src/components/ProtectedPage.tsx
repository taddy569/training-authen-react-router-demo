import React from "react";

import RequireAuth from "./RequireAuth";

function ProtectedPage() {
  return (
    <RequireAuth>
      <h3>Protected</h3>
    </RequireAuth>
  )
}

export default ProtectedPage
