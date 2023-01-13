import React from 'react'
import Project from './Project'


function ProjectList() {
  return (
    <div className='snap-center h-screen pt-[50px] pb-[50px] pl-[100px] pr-[100px] flex flex-col items-center text-center'>
      <div id='texts' className='w-[65%]'>
  <h1 id='title' className='text-[50px] font-bold'>Create and inspire. its fab</h1>
  <p id='desc' className='m-[20px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo aliquam ea perferendis, commodi, voluptate voluptas quos quisquam nihil delectus rem laborum illo iure totam. Similique esse inventore repudiandae rerum repellendus.</p>
      </div>

      <div id='list' className='flex flex-wrap justify-between w-full'>
   <Project />
   <Project />
   <Project />
   <Project />
      </div>
    </div>
  )
}

export default ProjectList