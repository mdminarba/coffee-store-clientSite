
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './cpmponent/CoffeeCard'
import { useState } from 'react'


function App() {

  const loadedcoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedcoffees)

  return (
    <>

      <h1 className='text-center text-4xl font-bold mt-5 text-purple-500'>Hot Hot Cold Coffee:{loadedcoffees.length}</h1>

      <div className=" grid lg:grid-cols-2 my-20   grid-cols-1 gap-5 mx-10">

        {
          loadedcoffees.map(coffe => <CoffeeCard
            key={coffe._id}
            coffe={coffe} 
            coffees={coffees}
            setCoffes={setCoffees}
            ></CoffeeCard>)
 
        }
      </div>
    </>
  )
}

export default App
