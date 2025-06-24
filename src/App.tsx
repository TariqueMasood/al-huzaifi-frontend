import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { ThemeProvider } from "./contexts/theme-context";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
