import { useEffect, useRef, useState } from 'react'
import s from './App.module.scss'
import { initionalPlaces } from './places.data'
import PlaceItem from './PlaceItem'
import { IPlace } from './place.interface'

function App() {
  const [places, setPlaces] = useState<IPlace>(initionalPlaces)


  useEffect(()=> {
    console.log('new place!!!')
  }, [places])

  const addNewPlace = () => {
    setPlaces([
      {
        country: 'Tanzanya',
        name: 'Manta Rezort',
        image:
          'https://i.pinimg.com/originals/fd/20/55/fd205515a6ca00bbdea96945202e99d9.jpg'
      },
      ...places
    ])
  }

  return (
    <div className='bg-[#EFF8F9] p-10'>
      <div className='text-center mb-2'>
        <button className={s.button} onClick={addNewPlace}>
          Add place
        </button>
      </div>
      <div className={s.main}>
        {places.map(place => (
          <PlaceItem key={place.name} place={place} />
        ))}
      </div>
    </div>
  )
}

export default App
