import { useLoaderData, useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'

import Card from './../cards/Card';

const CardProducts = ({}) => {

  const data = useLoaderData()
  const { category } = useParams() 
  const [clock, setclock] = useState([])
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        coffee => coffee.category === category
      )
      setclock(filteredByCategory)
    } else {
      setclock(data)
    }
  }, [category, data])
  // console.log(JSON.stringify(data))

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12'>
        {clock.map(coffee => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
     
      </div>
      
    </>
  )
}

export default CardProducts
