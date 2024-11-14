import DataTable, {createTheme} from "react-data-table-component";
import { useState, useEffect } from "react";
import { getUsers } from "./getUsers.js";
import { columns } from "./columns.js";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsers();
        setUsers(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  createTheme('custom', {
    text: {
      primary: '#0a3ce2',
      secondary: '#ffffff',
    },
    background: {
      default: '#000000',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    // divider: {
    //   default: '#f5f5f5',
    // },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');
  

  return (
    <div>
      <h1>React datatable</h1>
      <DataTable columns={columns} data={users} pagination theme="custom"/>
    </div>
  );
};

export default App;
