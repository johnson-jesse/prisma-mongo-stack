import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";

import { Dashboard } from "./common/Dashboard";
import theme from "./theme";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>
            <Dashboard />
            <Box
              sx={{
                margin: 5,
              }}
            >
              {children}
            </Box>
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
