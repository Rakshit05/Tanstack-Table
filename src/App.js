import './App.css';
import BasicTable from './components/BasicTable';
import mData from "./MOCK_DATA.json";
import { useMemo } from "react";

function App() {

  const data = useMemo(() => mData, []);

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      columns: [
        {
          header: "First ",
          accessorKey: "first_name",
        },
        {
          header: "Last ",
          accessorKey: "last_name",
        },
      ],
    },
    // {
    //   header: "First Name",
    //   accessorKey: "first_name",
    // },
    // {
    //   header: "Last Name",
    //   accessorKey: "last_name",
    // },
    // {
    //   header: "Name",
    //   accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    // },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
    },
  ];


  return (
    <>
    <h1>Tanstack Table</h1>
    <BasicTable data={data} columns={columns}/>
    </>
  );
}

export default App;
