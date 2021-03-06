import {GET_TODOS, ADD_TODOS, SAVE_TODOS, DELETE_TODOS} from './types'

export const TodoReducer = (state, action) => {
  const {type, payload} = action

  switch(type){
    case GET_TODOS:
      console.log('getting todos')
      const todos = localStorage.getItem('todos')
      if(todos) state = (JSON.parse(todos))
      return state;

    case ADD_TODOS:
      return [...state, payload.todo];

    case SAVE_TODOS:
      console.log('saving todos');
      localStorage.setItem('todos', JSON.stringify(payload.todos))
      return state

    case DELETE_TODOS:
      return state.filter(todo => todo.id !== payload.id);

    default:
      return state;
  }
}
