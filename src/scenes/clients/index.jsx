// import { Box, Typography, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from "../theme";
// import { DataClients } from "../../data/dataConfig";
// import Navbar from "../global/Navbar";
// import Topbar from "../global/Topbar";
// import { GridToolbar } from '@mui/x-data-grid';


// const Clients = () => {
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);
//     const columns = [];
//     const rows = [];
//     return (
//         <Box m="20px">
//             <Navbar/>
//             <Topbar/>
//             <Box
//                 m="40px 0 0 0"  // margin: 40px 0 0 0;  // margin-top: 40px;
//                 height="75vh"
//                 sx={{
//                     "& .MuiDataGrid-root": {
//                         border: "none",
//                     },
//                     "& .MuiDataGrid-cell": {
//                         borderBottom: "none",
//                     },
//                     "& .MuiDataGrid-columnHeaders": {
//                         backgroundColor: colors.blueAccent[700],
//                         borderBottom: "none",
//                     },
//                     "& .MuiDataGrid-virtualScroller": {
//                         backgroundColor: colors.primary[400],
//                     },
//                     "& .MuiDataGrid-footerContainer": {
//                         borderTop: "none",
//                         backgroundColor: colors.blueAccent[700],
//                     },
//                     "& .MuiCheckbox-root": {
//                         color: `${colors.greenAccent[200]} !important`,
//                     },
//                 }}
//             >

//                 <DataGrid
//                     rows={DataClients}
//                     columns={columns}
//                     components={{ Toolbar: GridToolbar }}
//                 />
//             </Box>
//         </Box>
//     );
// };

// export default Clients;