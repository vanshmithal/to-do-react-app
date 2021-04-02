import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function EditTask({
  item,
  showEdit,
  handleCloseEdit,
  updateTask,
}) {
  const [taskName, setTaskName] = useState(item.taskName)
  const [desc, setDesc] = useState(item.desc)

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'taskName') {
      setTaskName(value)
    } else {
      setDesc(value)
    }
  }
  const handleEdit = (e) => {
    e.preventDefault()
    let obj = { id: item.id, taskName, desc }
    updateTask(obj)
    setDesc('')
    setTaskName('')
    handleCloseEdit()
  }
  return (
    <Modal show={showEdit} onHide={handleCloseEdit}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className='form-group'>
            <label>Task Name</label>
            <input
              name='taskName'
              type='text'
              className='form-control'
              value={taskName}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Description</label>
            <textarea
              name='desc'
              rows='5'
              className='form-control'
              value={desc}
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleCloseEdit}>
          Close
        </Button>
        <Button variant='primary' onClick={handleEdit}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
