import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import "./new.scss"

const New = ({inputs, title}) => {
  return (
    <div className='new'>
       <Sidebar/>
       <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
          <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          alt='img'/>
          </div>
          <div className="rigth">
           <form>
           {
            inputs.map((input) =>(
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
              </div>
            ))
           }
            <button>Send</button>
           </form>
          </div>
        </div>
       </div>
    </div>
  )
}

export default New