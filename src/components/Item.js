import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import EditTask from './EditTask'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

const Item = ({ item, handleDelete, updateList }) => {
  const { id } = item

  const [showEdit, setShowEdit] = useState(false)

  const handleCloseEdit = () => setShowEdit(false)
  const handleShowEdit = () => setShowEdit(true)

  const updateTask = (obj) => {
    updateList(obj)
  }

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body className='cardstyle'>
          <Card.Title>{item.taskName}</Card.Title>
          <Card.Text>
            <p>{item.desc}</p>
          </Card.Text>
          <div className='text-sm-right'>
            <Button
              className='btn-sm'
              variant='secondary'
              onClick={handleShowEdit}
            >
              <AiOutlineEdit />
            </Button>
            <Button
              className='btn-sm'
              variant='danger'
              onClick={() => handleDelete(id)}
            >
              <AiOutlineDelete />
            </Button>
          </div>
        </Card.Body>
      </Card>
      <EditTask
        item={item}
        updateTask={updateTask}
        showEdit={showEdit}
        handleCloseEdit={handleCloseEdit}
      />
    </>
  )
}

export default Item
