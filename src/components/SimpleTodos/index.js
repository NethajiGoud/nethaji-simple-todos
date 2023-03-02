import './index.css'

import {Component} from 'react'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    stateTodosList: initialTodosList,
  }

  onDeleteUser = id => {
    //  console.log('triggered')
    const {stateTodosList} = this.state
    const filteredUserList = stateTodosList.filter(each => each.id !== id)
    this.setState({
      stateTodosList: filteredUserList,
    })
  }

  render() {
    const {stateTodosList} = this.state

    return (
      <div className="background">
        <div className="white-container">
          <h1 className="simple-todos-heading"> Simple Todos</h1>
          <ul>
            {stateTodosList.map(eachItem => (
              <TodoItem
                initialTodosList={eachItem}
                key={eachItem.id}
                onDeleteUser={this.onDeleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
