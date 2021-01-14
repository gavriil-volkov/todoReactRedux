import { useDispatch } from 'react-redux'
import * as AC from '../../redux/actionCreators/tasks'
import style from './style.module.css'

function Item({ id, index, text, status }) {

  const dispatch = useDispatch()

  const changeStatus = () => {
    dispatch(AC.changeStatus(id))
  }

  const deleteTask = () => {
    dispatch(AC.deleteTask(id))
  }

  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className={`${status ? style.done : ""} d-flex align-items-center`}>
        <strong>{index}</strong>. {text}
      </div>
      <div className="d-flex">
        <button onClick={changeStatus} type="button" className="btn btn-primary mx-1">Изменить статус</button>
        <button onClick={deleteTask} type="button" className="btn btn-danger mx-1">Удалить</button>
      </div>
    </li>
  )
}

export default Item
