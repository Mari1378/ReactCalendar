export function makeTodo() {
  const todoReducer = (prevTodos, action) => {
    switch (action.type) {
      case "ADD": {
        return [...prevTodos, action.payload];
      }
      case "DELETE": {
        return prevTodos.filter(
          (todo) =>
            todo.Date.format("DD/MM/YYYY") !==
            action.payload.format("DD/MM/YYYY")
        );
      }
      case "EDIT": {
        return prevTodos.map((todo) =>
          todo.Date.format("DD/MM/YYYY") ===
          action.payload.Date.format("DD/MM/YYYY")
            ? { ...todo, title: action.payload.title }
            : todo
        );
      }
      default:
        return prevTodos;
    }
  };
  return todoReducer;
}
