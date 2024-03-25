import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { database } from "./firebase-config";
import { useNavigate } from "react-router-dom";
function HomeScreen() {
  const history = useNavigate();

  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      history("/");
    });
  };

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEditButtonClick = (index) => {
    setEditIndex(index);
    setEditValue(todos[index].text);
  };

  const handleEditInputChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleEditSave = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = editValue;
    setTodos(updatedTodos);
    setEditIndex(null);
  };

  const handleCompleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="">
      <div className="navbar">
        <h1>Home</h1>
        <button
          className="signout font-bold cursor-pointer"
          onClick={handleClick}
        >
          SignOut
        </button>
      </div>

      <div className="title background-image ">
        <h1 className="text-white font-bold my-5 w-48">Todo App</h1>
        <div className="inputtag">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your todo..."
            className="p-2 bg-blue-200 mx-3 rounded-sm "
          />
          <button
            onClick={handleAddTodo}
            className="bg-green-600 font-md py-2 px-6 rounded-sm text-white font-bold"
          >
            Add
          </button>
        </div>
        <ul className="mt-5">
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-center items-center mb-3">
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                className="flex-1 p-3 max-w-25 rounded-md bg-gray-200"
              >
                {todo.text}
              </span>
              <div className="flex space-x-2 mx-3 ">
                {editIndex === index ? (
                  <div>
                    <input
                      type="text"
                      value={editValue}
                      onChange={handleEditInputChange}
                      className="mx-3 p-3 rounded-md "
                    />
                    <button
                      className="py-2 px-4 rounded-md mx-2 bg-white hover:bg-green-600 cursor-pointer"
                      onClick={() => handleEditSave(index)}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => handleEditButtonClick(index)}
                      className="py-2 px-4 border-blue-400 cursor-pointer bg-white  hover:bg-green-600 rounded-md "
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTodo(index)}
                      className=" bg-white py-2 px-4  hover:bg-red-600 rounded-md"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleCompleteTodo(index)}
                      className=" bg-white py-2 px-4  hover:bg-green-600 rounded-md "
                    >
                      {todo.completed ? "Undo" : "Complete"}
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomeScreen;
