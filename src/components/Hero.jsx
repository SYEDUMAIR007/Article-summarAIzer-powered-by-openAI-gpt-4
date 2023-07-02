import React from 'react'
import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex flex-col justify-center items-center '>
      <nav className='w-full flex justify-between items-center  mb-10 pt-3'>
        <img src={logo} alt="sumzlogo" className='w-28 object-contain' />
        <button onClick={()=>window.open("https://github.com/SYEDUMAIR007")} className='black_btn'>GitHub
        </button>
      </nav>
      <h1 className='head_text'>Welcome to summar<span className='text-aiColor'>AI</span>ze,<br /> Powered by
      <span className='text_gradient'> OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>your ultimate tool for effortlessly condensing lengthy articles into concise and digestible summaries.
      </h2>
    </header>
  )
}

export default Hero