import React,{ useState } from 'react'

const AskCard = ({title, content, content2}) => {
const [check, setCheck] = useState(false);
  
return (
  <div>
    <div className='askcard' onClick={() => {
      setCheck((e) => !e);
      }}
    >
        <p className="askTitle">
          {title}
        </p>
        <p className='checkIcon'>
        {check ? "×" : "＋"}
        </p>
    </div>
    {check && (
      <div className="answerBox">
        <p className='askContent'>{content}</p>
        <p className='askContent'>{content2}</p>
      </div>
    )}
  </div>
  )
}

export default AskCard