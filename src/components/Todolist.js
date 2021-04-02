import React, { useState, useEffect } from 'react'
import CreateTask from './CreateTask'
import Item from './Item'

export default function Todolist() {
  const [show, setShow] = useState(false)

  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    let arr = localStorage.getItem('taskList')

    if (arr) {
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
  }, [])

  const saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem('taskList', JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  const updateList = (obj) => {
    var editId = null
    for (var i = 0; i < taskList.length; i++) {
      if (taskList[i].id === obj.id) {
        editId = i
        break
      }
    }
    let newList = taskList
    newList[editId] = obj
    localStorage.setItem('taskList', JSON.stringify(newList))
    setTaskList(newList)
    window.location.reload()
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleDelete = (id) => {
    let newList = taskList
    newList = newList.filter((item) => item.id !== id)
    setTaskList(newList)
    localStorage.setItem('taskList', JSON.stringify(newList))
    window.location.reload()
  }
  return (
    <>
      <div className='header text-center container'>
        <h1>To Do List React App</h1>
        <button className='btn-primary btn-lg' onClick={handleShow}>
          Create Task
        </button>
      </div>
      <div className='card-div card-columns container'>
        {taskList.map((item) => (
          <Item
            item={item}
            id={item.id}
            handleDelete={handleDelete}
            updateList={updateList}
          />
        ))}
      </div>
      <CreateTask saveTask={saveTask} show={show} handleClose={handleClose} />
    </>
  )
}
