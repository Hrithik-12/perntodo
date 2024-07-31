import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import Edit from "../components/Edit";
import Delete from "./Delete";
import { Link } from "react-router-dom";

function Listingalltodos() {
  const [allTodos, setalltodos] = useState([]);

  const getalltodos = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/v1/getall/todos");
      const data = await res.json();
      if(res.ok){
        setalltodos(data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getalltodos();
  }, []);

  return (
    <div className="overflow-x-auto mt-20  min-h-screen max-w-6xl mx-auto ">
      <Table>
        <Table.Head>
          <Table.HeadCell>Descriptions</Table.HeadCell>
          <Table.HeadCell>Want To Edit</Table.HeadCell>
          <Table.HeadCell>Delete your todos</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allTodos &&
            allTodos.length > 0 &&
            allTodos.map((data) => (
              <Table.Row
                key={data.todoid}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-2xl font-serif  text-cyan-700 dark:text-white">
                  {data.descriptions}
                </Table.Cell>
                <Table.Cell><Edit todoid={data.todoid}/></Table.Cell>
                <Table.Cell><Delete todoid={data.todoid} allTodos={allTodos}  /></Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
      <div className="mt-5 w-full flex items-center justify-center ">
      <Link to={'/'} className="w-fit p-2 text-sm font-serif font-semibold bg-cyan-400 rounded-full shadow-md  " >Home</Link>

      </div>

    </div>
  );
}

export default Listingalltodos;
