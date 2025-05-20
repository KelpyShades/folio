
import React from 'react'
import GithubCalendar from 'react-github-calendar'

const GithubGraph = () => {
  return (
    <div id='skills' className="bg-secondary w-full justify-center flex hover:border-primary dark:hover:border-accent border-borders text-text rounded-4xl border-2 px-5 py-5 opacity-90 transition-colors duration-700 ease-in-out">
    <GithubCalendar  theme={{dark: ['#161b22', '#333333', '#555555', '#a3a3a3', '#ffffff'], light: ['#161b22', '#333333', '#555555', '#a3a3a3', '#ffffff']}} year={new Date().getFullYear()} username='KelpyShades' />
  </div>
  )
}

export default GithubGraph