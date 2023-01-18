import React from 'react';
import '../css/Start.css';
import StartBar from '../components/start/StartBar';
import StartMain from '../components/start/StartMain';
import StartRight from '../components/start/StartRight';
import StartLeft from '../components/start/StartLeft';

const Start = () => {
  return (
    <div>
      <StartMain />
      <StartBar />
      <StartRight />
      <StartBar />
      <StartLeft />
      <StartBar />
      <StartRight />
      <StartBar />
      <StartLeft />
      <StartBar />
    </div>
  )
}

export default Start