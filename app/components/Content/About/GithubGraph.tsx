
import React from 'react'
import GithubCalendar from 'react-github-calendar'

const GithubGraph = () => {
  return (
    <div id='skills' className="bg-secondary w-full justify-center flex  hover:border-accent border-borders text-text rounded-4xl border-2 px-5 py-5 opacity-75 transition-colors duration-700 ease-in-out">
    <GithubCalendar year={new Date().getFullYear()} username='KelpyShades' />
  </div>
  )
}

export default GithubGraph