// Write your code here
import './index.css'

const TodoItem = props => {
  const {initialTodosList, onDeleteUser} = props
  const {title, id} = initialTodosList
  const OnDelete = () => {
    onDeleteUser(id)
  }
  return (
    <li className="li-element">
      <p> {title} </p>
      <button type="button" className="button" onClick={OnDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
