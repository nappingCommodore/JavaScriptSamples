import logo from './logo.svg';
import './App.css';
import { useState, useMemo, useCallback, useReducer } from "react";
import Todos from "./ToDos";

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      let updatedState = state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
      return updatedState;
    case "ADDTODO":
      return [...state, { id: action.id, title: action.title, complete: action.complete }];
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const buttonClick = () => {
    dispatch({ type: "ADDTODO", id: todos.length + 1, title: "New Todo " + todos.length + 1, complete: false });
  };

  const handleComplete = (todo) => {
    console.log("Calling dispatch for " + todo.id);
    dispatch({ type: "COMPLETE", id: todo.id });
    console.log("Dispatch called for " + todo.id + " complete: " + todo.complete);
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
      <button onClick={buttonClick}>Add To Do</button>
    </>
  );
}

// Use Memo Example
// function App() {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   // const calculation = expensiveCalculation(count);
//   const calculation = useMemo(() => expensiveCalculation(count), [count]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// }

// Use Callback Example
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   // const addTodo = () => {
//   //   setTodos((t) => [...t, "New Todo"]);
//   // };

//   const addTodo = useCallback(() => {
//     setTodos((t) => [...t, "New Todo"]);
//   }, [todos]);

//   return (
//     <>
//       <Todos todos={todos} addTodo={addTodo} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// Example for useReducer


export default App;
