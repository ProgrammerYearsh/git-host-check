import React from 'react'
import { useNavigate } from 'react-router'

function SeeAlsoOptions({label, navigateTo}) {
  const navigation = useNavigate()
  return (
    <a
    onClick={() => navigation(navigateTo)}
    className="flex cursor-pointer items-center rounded-lg border border-gray-200 bg-white px-4 py-2  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-leadGrey transition-colors duration-300 ease-in-out hover:border-mattBlack hover:border-2">
    <svg className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
    </svg>
    <span className="text-sm font-medium text-gray-900 dark:text-white">{label}</span>
  </a>
  )
}

export default SeeAlsoOptions