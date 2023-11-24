// import React from 'react'
// import {newLogo} from '../assets'
// import { ReactComponent as NewLogo } from '../assets/newLogo.svg'
import logo from '../assets/Logo.png'


const Hero = () => {
  // console.log(newLogo)
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={logo}
          width={150}
          height={150}
        />
       
        <button
          type='button'
          onClick={() => window.open('https://github.com/varundhand')}
          className='black_btn'
        >My Github</button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'> OpenAI GPT-4 </span>
      </h1>

      <h2 className='desc'>
        Introducing Briefify, an open-source article summarizer that streamlines <span className="bg-yellow-200">content creation & curation</span>. Transform lengthy articles into concise summaries effortlessly, allowing you to grasp key points without spending hours reading. Briefify simplifies your reading experience, ensuring you stay informed, all while prioritizing data security and privacy.
      </h2>

    </header>
  )
}

export default Hero
