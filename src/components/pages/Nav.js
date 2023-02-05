import {RxTextAlignJustify} from 'react-icons/rx'
import {BsFillCartCheckFill} from 'react-icons/bs'
import { BsPersonCircle } from 'react-icons/bs'
import {CiBellOn} from 'react-icons/ci'
import { useState } from 'react'

const Navbar = () => {


  const [show,setShow] = useState(true);
  const [view,setView] = useState(null);




  return <>
      <div className="main-nav">
        <div className="nav-container">
           <div className="nav-head">
            <h2>K.Stores</h2>
           </div>
           <div className='btn-div'>
              <button className='btn' onClick={()=> setShow(!show)}><RxTextAlignJustify/></button>
           </div>
        </div>
        {show? <div className='nav-icon'>
          <p><BsFillCartCheckFill/></p>
          <p><BsPersonCircle/></p>
          <p><CiBellOn/></p>
         </div> : null}
     </div>
    
    </>

}




export default Navbar;