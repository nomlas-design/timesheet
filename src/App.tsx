import React from 'react';
import './App.css';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDayjs';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TimeTable from './components/TimeTable'


function App() {

  const color = '#fff'

  const theme = createTheme({
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            color
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <TimeTable />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
