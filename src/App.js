import { ColorModeContext,useMode } from './scenes/theme'; //Import theme from theme.js
import {CssBaseline, ThemeProvider} from '@mui/material'; //Baseline resets CSS to default MUI. ThemeProvider is used to set theme.
import {Routes,Route} from 'react-router-dom';
// import express from 'express';
// import mysql from 'mysql'; 
// import path, { dirname } from 'path';
// import bcrypt from 'bcryptjs';

// Import Global components
import Topbar from './scenes/global/Topbar';
import Navbar from './scenes/global/Navbar';
// import { DataGrid } from '@mui/x-data-grid';
// import db from './data/dataConfig';


// Import Pages
import Dashboard from './scenes/dashboard';
// import Calendar from './scenes/calendar';
// import Sales from './scenes/sales';
import Clients from './scenes/clients'; 
// import Contacts from './scenes/contacts';
// import Communications from './scenes/communications';
// import Bar from './scenes/bar';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import Geography from './scenes/geography';
// import AddLead from './scenes/addLead';




function App() {
  const [theme,colorMode] = useMode();


  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Navbar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/calendar" element={<Calendar />} /> */}
              {/* <Route path="/sales" element={<Sales />} /> */}
              {/* <Route path="/addLead" element={<AddLead />} /> */}
              <Route path="/clients" element={<Clients />} />
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/projects" element={<Projects />} /> */}
              {/* <Route path="/consultants" element={<Contacts />} /> */}
              {/* <Route path="/communications" element={<Communications />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
            {/* <Dashboard /> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

// App.get("/clients", (req, res) => {
//   db.query('SELECT * FROM crm_db.vw_clients_list', (error, results) => {
//       if (error) {
//           console.log(error);
//           res.status(500).send("An error occurred while fetching clients.");
//       } else {
//           // console.log('DB Query Results: ', results);
//           res.render('./scenes/clients/index', { vw_clients_list: results });
//       }
//   });
// });

export default App;