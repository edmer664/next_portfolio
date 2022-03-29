import React from 'react'
import Image from 'next/image'

interface ProjectCardProps{
  imageURL:string,
  title:string,
  description: string,
}

export const ProjectCards = (props:ProjectCardProps) => {
  return (
    <article className='flex md:flex-row flex-col md:justify-evenly min-h-[300px] text-left py-8'>
      <div className='w-full md:w-1/2'>
        <Image
          width={400}
          height={300}
          objectFit="cover"
          src={props.imageURL}
          alt={`${props.title} Image`}
        />
      </div>
      <div className='flex flex-col w-full px-7 md:w-1/2'>
        <h3 className='pb-5 text-lg font-bold'>
          {props.title}
        </h3>
        <p>
          {props.description}
        </p>
      </div>
    </article>
  )
}
export default ProjectCards