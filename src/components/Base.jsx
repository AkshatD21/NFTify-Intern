import React from 'react'
import Sidebar from './Sidebar'
import InputIcon from './Search';
import Footer from './Footer'

const Base = ({children}) => {
  return (
    <>
      <div className="flex flex-row" >
        <Sidebar />
        <div className='flex-col my-8'>
          <InputIcon />
          <div className="mx-8 my-8">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Base