import * as TYPES from '../types/task'

export function addNew(text) {
  return {
    type: TYPES.ADD_NEW,
    payload: {
    text,
    id: Date.now(),
    status: false
    }
  }
}

// export function editTodo(id, text ) {
//   return {
//     type: TYPES.EDIT_TODO,
//     payload: { id, text }
//   };
// }

export function changeStatus(id) {
  return {
    type: TYPES.CHANGE_STATUS,
    payload: id
  }
}

export function deleteTask(id) {
  return {
    type: TYPES.DELETE,
    payload: id
  }
}
