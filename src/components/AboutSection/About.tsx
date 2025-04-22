import React from 'react'
import Link from 'next/link'

function About() {
  return (
    <div className='md:w-[800px] md:mx-0 mx-4 '>
      <h2 className='   font-display text-lg text-white mb-4'>About Me</h2>

      <div className='text-neutral-400 font-display md:font-normal font-light md:text-lg text-md flex flex-col gap-6 md:gap-8 flex-wrap mb-12'>
        <p>I'm Sudhanshu Shekhar, a Software Engineer from india.</p>
        <p>I build scalable, engaging, and accessible digital experiences.</p>
        <p>I'm currently at <span className='text-blue-500'>Shayak Studio</span>, working as a backend developer building and maintaining high-quality backend  for their clients.</p>
      </div>
      <h2 className=' mt-4  font-display text-lg text-white mb-4'>Reach out to me</h2>
      <p className='text-neutral-400 font-display md:font-normal font-light text-md  mb-8'>You can find me most active on <Link href="https://x.com/shekharTwts "className='text-sky-500' target='_blank'>Twitter</Link> and I’m best reached via <Link  className='text-red-600' href="mailto:contact.sidshekhar@gmail.com">Email</Link>.</p>
    
    </div>
  )
}

export default About
