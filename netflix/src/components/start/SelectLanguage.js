import React from 'react';
import {BsGlobe} from 'react-icons/bs'

const SelectLanguage = () => {
  return (
    <div className='start-language'>
        <BsGlobe className='select-icon'size={15}/>
        <select className='select-language'>
              <option>한국어</option>
              <option>English</option>
        </select>
    </div>
  )
}

export default SelectLanguage