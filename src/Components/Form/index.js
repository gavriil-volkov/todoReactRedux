import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNew } from "../../redux/actionCreators/tasks"

function Form() {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    if(value.trim()) {
      dispatch(addNew(value.trim()))
      setValue('')
    }
  }

  return (
    <>
    <h1>ТуДуШеЧка 📃</h1>
    {/* <p>{value}</p> */}
    <form onSubmit={submitHandler} className="mt-5"> 
      <div className="mb-3">
        <input onChange={(e) => setValue(e.target.value)} value={value} type="text" className="form-control" placeholder="Название ТуДуШки..." />
      </div>
      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
    </>
  )
}

export default Form
