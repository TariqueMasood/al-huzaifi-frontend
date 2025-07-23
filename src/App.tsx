import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import GlobalStyles from "./styles/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/auth-context";
import { ConfigProvider } from "antd";

function App() {
  const queryClient = new QueryClient();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#007b5e",
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <GlobalStyles />
            <RouterProvider router={router} />
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
