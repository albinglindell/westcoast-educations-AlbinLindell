import React, {Fragment, useState} from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import Modal from '../Modal/Modal'





function Navbar() {
  const [modalValue, setModalValue] = useState(false)
  const openAddModalWindow = ()=>{
    setModalValue(true)
  }

  
  return (
    <div>
      <header className='Header'>
        <nav className='HeaderNav'>
        <Link to={"/"}><h2 >Westcourst education</h2></Link>
            <ul>
               <li onClick={openAddModalWindow}>Lägg till lärare och kurser</li>
            </ul>
        </nav>
      </header>
      {modalValue && <Fragment>
        {ReactDOM.createPortal(
        <Modal closeModal={setModalValue}/>,
        document.querySelector('#modal-root'),
      )}
      </Fragment>}
    </div>
  )
}

export default Navbar
