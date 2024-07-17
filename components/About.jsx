import { link } from 'fs'
import React from 'react'
import Card from './Card'

const cardData = [
  {
    id: 1,
    name: '01.',
    title: 'Service for Any Level of Expertise.',
    description: '',
    link: ''
  },
  {
    id: 2,
    name: '02.',
    title: 'Industry best practices.',
    description: 'Polkadot unites and secures a growing ecosystem of specialized blockchains called specialized unites.',
    link: 'Learn More →',
  },
  {
    id: 3,
    name: '03.',
    title: 'Protected by insurance.',
    description: '',
    link: '',
  },
]
const About = () => {
  return (
    <div id='#about' className='max-w-[85%] mx-auto mt-40 md:mt-60 lg:mt-6'>
        <div className='flex-col justify-between items-center'>
          <div className='grid grid-cols-1 lg:grid-cols-2 justify-between items-center'>
            <h2 className='text-2xl uppercase font-bold'>Your <span className='text-[#BBED2B]'>trusted</span>  partner of cryptocurrency.</h2>
            <p className='text-sm max-w-[650px] lg:max-w-[500px] mt-3'>Polkadot unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Polkadot can ecosystem of specialized called.</p>
          </div>
          <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 py-8 px-4 items-center justify-center'>
            {cardData.map((card) => (
              <Card key={card.id} name={card.name} title={card.title} description={card.description} link={card.link}/>
            ))}
          </div>
      </div>
    </div>
  )
}

export default About