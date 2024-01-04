// import React from 'react'
import {logo} from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex items-center mb-10 pt-6"> {/* flex justify-between items-center w-full mb-10 pt-3 mx-auto */}
        {/* <img src={logo} alt="ai_logo" className="w-28 object-contain" /> */}

        <button type="button" onClick={() => window.open("https://github.com/AlexAjit")} className="black_btn">
          Github
        </button>
      </nav>


      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-5</span>
      </h1>
      
      <h2 className="desc">
        Simplify your reading with Summarize, an open-source article summarizer that tranforms lengthy articles into clear and concie summaries.
      </h2>
    </header>
  )
}

export default Hero