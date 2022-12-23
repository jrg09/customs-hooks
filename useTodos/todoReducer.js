// {type: [TODO] Remove Todo, payload: id}

export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];

    case "[TODO] Remove Todo":
      return initialState.filter((item) => item.id !== action.payload);

    case "[TODO] Toggle Todo":
      return initialState.map((item) => {
        if (item.id === action.payload)
          return {
            ...item,
            done: !item.done,
          };
        return item;
      });

    default:
      return initialState;
  }
};

//throw new Error("Action.type = ABC no está implementado");
