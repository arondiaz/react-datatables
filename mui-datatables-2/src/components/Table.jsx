import { useEffect, useState } from "react";
import { getUsers } from "../data/users.js";
import MUIDataTable from "mui-datatables";

const Table = () => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setListUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "NAME",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "email",
      label: "EMAIL",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const options = {
    responsive: "standard",
  };

  return (
    <>
      <MUIDataTable
        title={"Clientes"}
        data={listUsers}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default Table;
