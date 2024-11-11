import DataTable from "react-data-table-component";
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

  return (
    <div>
      <h1>React datatable</h1>
      <DataTable columns={columns} data={users} pagination/>
    </div>
  );
};

export default App;
