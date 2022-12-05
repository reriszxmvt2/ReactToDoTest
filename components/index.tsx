import React from 'react'
import Modals from './modal'
import Button from '@mui/material/Button'

const Index = () => {
  const [open, setOpen] = React.useState(false)
  const [AllData, setAllData] = React.useState<string[]>([])
  // console.log(AllData)

  function DeleteFood (ketId: any) {
    setAllData(prevI => {
      return prevI.filter(i => i !== ketId)
    })
  }

  return (
    <div>
      <div>
        {AllData.map((e, i) => {
          return (
            <div key={i} className='border p-1 mt-1'>
              <div className='grid grid-cols-2'>
                <div className='flex items-center justify-center'>
                  <div>{e}</div>
                </div>
                <div>
                  <Button
                    onClick={() => {
                      DeleteFood(i)
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='border mt-4'>
        <Button onClick={() => setOpen(prev => !prev)}>+ Add Food</Button>
      </div>
      <Modals
        openModal={open}
        closeModal={() => setOpen(!open)}
        SaveData={setAllData}
      />
    </div>
  )
}

export default Index
