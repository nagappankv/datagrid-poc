// @ts-ignore
'use client'
import Image from "next/image";
import dynamic from 'next/dynamic';
import {GridRowsProp, GridColDef  } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';

const DataGridNoSSR = dynamic(() => import('@mui/x-data-grid').then(mod => mod.DataGrid), {
  ssr: false, // Disable server-side rendering for this component
});

const columns: GridColDef[] = [
  // { field: 'col1', headerName: 'Id', width: 150 },
  { field: 'col2', headerName: 'First Name', width: 150 },
  { field: 'col3', headerName: 'Last Name', width: 150 },
  { field: 'col4', headerName: 'Email', width: 150 },
  { field: 'col5', headerName: 'Gender', width: 150 },
  { field: 'col6', headerName: 'IP Address', width: 150 },
];

// const rows: GridRowsProp = [
//   {
//     "id": 1,
//     "col2": "Darren",
//     "col3": "MacCaffrey",
//     "col4": "dmaccaffrey0@tinypic.com",
//     "col5": "Male",
//     "col6": "226.10.246.150"
//   }, {
//     "id": 2,
//     "col2": "Debera",
//     "col3": "Peschmann",
//     "col4": "dpeschmann1@who.int",
//     "col5": "Female",
//     "col6": "125.177.42.116"
//   }, {
//     "id": 3,
//     "col2": "Cyril",
//     "col3": "Scanlon",
//     "col4": "cscanlon2@ameblo.jp",
//     "col5": "Male",
//     "col6": "98.23.122.146"
//   },
// ];

export default function Home() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://run.mocky.io/v3/75a6fdfb-c4a1-41af-b851-ce2b249c2a29');
      const data = await res.json();
      setRows(data);
    }

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div style={{ height: '80%', width: '100%' }}>
      <DataGridNoSSR rows={rows} columns={columns} disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        pageSizeOptions={[5, 10, 20, 50, 100, 500]}
        pagination
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        />
    </div>
    </main>
  );
}
