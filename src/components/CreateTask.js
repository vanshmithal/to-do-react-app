import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function CreateTask({ show, handleClose, saveTask }) {
  const [taskName, setTaskName] = useState('')
  const [desc, setDesc] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'taskName') {
      setTaskName(value)
    } else {
      setDesc(value)
    }
  }
  const handleSave = () => {
    const d = new Date()
    let taskObj = { id: d.getTime().toString(), taskName, desc }
    saveTask(taskObj)
    setDesc('')
    setTaskName('')
    handleClose()
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Task</Modal.Title>
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
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleSave}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
