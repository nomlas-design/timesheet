import React from 'react';
import './App.css';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDayjs';
import TimeTable from './components/TimeTable'
import Navbar from './components/Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';


let theme = createTheme({
  typography: {
    fontFamily: 'Poppins, san-serif',
    fontSize: 12
  },
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#527677',
    },
  },
});



function App() {

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Navbar />
        <TimeTable />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
