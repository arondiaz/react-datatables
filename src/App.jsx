import DataTable from "react-data-table-component";

const data = [
  {
    id: 1,
    name: "Pepe",
    age: 23,
  },
  {
    id: 2,
    name: "Pae",
    age: 42,
  },
  {
    id: 3,
    name: "Mark",
    age: 34,
  },
];

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
  },
  {
    name: "NOMBRE",
    selector: (row) => row.name,
  },
  {
    name: "EDAD",
    selector: (row) => row.age,
  },
];

const App = () => {
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default App;
