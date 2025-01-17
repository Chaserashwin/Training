import React, { useState } from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";
// import Table from "./Table";
import "../../css/Maincss/Todo.css";

export default function Todo() {
  const [data, setData] = useState([]);

  const addTodos = (text) => {
    //to display values to the bottom
    // setData([...data, { id: data.length + 1, text, complete: false }]);
    //to display values to the top
    setData([{ id: data.length + 1, text, complete: false }, ...data]);
  };

  const deleteTodo = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const statusChange = (ids) => {
    setData(
      data.map((items) => {
        return items.id === ids
          ? { ...items, complete: (items.complete = true) }
          : items;
      })
    );
    // setData(
    //   data.map((items) => {
    //     return (
    //       <>
    //         {items.id === ids
    //           ? { ...items, complete: (items.complete = true) }
    //           : items}
    //       </>
    //     );
    //   })
    // );
  };

  console.log(data);
  return (
    <div className="header">
      <h1>
        <u>ToDoLists</u>
      </h1>
      <Todolist
        listitems={data}
        deleteTodo={deleteTodo}
        statusChange={statusChange}
      />
      <Todoform setData={addTodos} />
    </div>
  );
}

//Spread function
// const arr = [1,2,3];

// const arr2 = [...arr,4]

// [1,2,3,4]

{
  /* <Table
  listitems={data}
  deleteTodo={deleteTodo}
  statusChange={statusChange}
/> */
}

// getName = () => "Name"

// () =>{
//     logic or not logic
//     return()
// }

// () => sdfsdfh
