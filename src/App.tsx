import './App.css'
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/index"; 
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/main';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
    </>
  )
}

export default App