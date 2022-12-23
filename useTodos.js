import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onAddTodo = (newTodo) => {
    const action = { type: "[TODO] Add Todo", payload: newTodo };
    dispatch(action);
  };

  const onDeleteTodo = (id) => {
    dispatch({ type: "[TODO] Remove Todo", payload: id });
  };

  const onToggleTodo = (id) => {
    dispatch({ type: "[TODO] Toggle Todo", payload: id });
  };

  return {
    todos,
    onAddTodo,
    onDeleteTodo,
    onToggleTodo,
    todosCount: todos.length,
    todosPendingCount: todos.filter((t) => !t.done).length,
  };
};
