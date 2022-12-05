import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

interface props {
  openModal: boolean
  closeModal: () => void
  SaveData: React.Dispatch<React.SetStateAction<string[]>>
}

const Modals = (props: props) => {
  const [foodName, setFoodName] = React.useState('')

  // console.log(Save)
  return (
    <div>
      <Modal
        open={props.openModal}
        onClose={() => props.closeModal()}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Food Name
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <div>
              <div className='border'>
                <form action=''>
                  <label htmlFor=''>
                    <input
                      type='text'
                      placeholder='Food Name'
                      className='w-full h-full focus:outline-none'
                      onChange={e => setFoodName(e.target.value)}
                    />
                  </label>
                </form>
              </div>
            </div>
          </Typography>

          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <Button
              onClick={() => {
                props.SaveData(prev => [...prev, foodName])
                props.closeModal()
              }}
            >
              Save
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Modals
