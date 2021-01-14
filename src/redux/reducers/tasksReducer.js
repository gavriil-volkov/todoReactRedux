import * as TYPES from '../types/task'

function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case TYPES.ADD_NEW:
      return [...tasks, action.payload]

    case TYPES.DELETE:
      return tasks.filter(el => el.id !== action.payload)

    // case TYPES.EDIT_TODO:
    //   return {
    //     ...tasks,
    //     tasks: tasks.map((el) => {
    //       if (el.id === action.payload.id) {
    //         return {
    //           ...el,
    //           tasks: action.payload,
    //         }
    //       }
    //       return el;
    //     })
    //   }

    case TYPES.CHANGE_STATUS:
      return tasks.map(el => {
        if (el.id === action.payload) {
          return {
            ...el,
            status: !el.status
          }
        }
        return el
      })

    default:
      return tasks
  }
}

export default tasksReducer
