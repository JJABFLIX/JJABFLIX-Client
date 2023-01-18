import React from 'react'
import { BiWorld } from "react-icons/bi"

const SelectLanguage = () => {
  return (
    <div>
        <select className='start-language'>
              <option><BiWorld />한국어</option>
              <option>English</option>
        </select>
    </div>
  )
}

export default SelectLanguage