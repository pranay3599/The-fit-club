import React, { useState } from 'react'
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';
import './Header.css'
const Header = () => {
  const mobile=window.innerWidth<=768? true: false;
  const [menuOpened,setMenuOpened]=useState(false);
  return (
    <div className='header'id='header'>
      <img src={Logo} alt='logo'className='logo' />
      {(menuOpened===false && mobile===true)?(
        <div
        style={{backgroundColor:'var(--appColor',
        padding:'0.5rem',
        borderRadius:'5px' }}

        onClick={()=>setMenuOpened(true)}

        >
          <img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem'}}/></div>
      ):(<ul className='header-menu'>
      <li> 
        <Link 
        onClick={()=>setMenuOpened(false)}
       activeClass='active'
       to='header'
       spy={true}
       smooth={true}
      >
        Home
        </Link>
      </li>

      <li> 
        <Link 
      onClick={()=>setMenuOpened(false)}
    
       to='program'
       spy={true}
       smooth={true}
      >Progress
      </Link>
      </li>

      <li> 
        <Link 
        onClick={()=>setMenuOpened(false)}
        
       to='reasons'
       spy={true}
       smooth={true}
        >Why us</Link>
        </li>

      <li> 
        <Link 
        onClick={()=>setMenuOpened(false)}
        
       to='plans'
       spy={true}
       smooth={true}
        >Plans
        </Link>
        </li>

      <li> 
        <Link 
        onClick={()=>setMenuOpened(false)}
        
       to='testimonials'
       spy={true}
       smooth={true}
        >Test
        </Link>
        </li>

        <li> 
        <Link 
        onClick={()=>setMenuOpened(false)}
        
       to='contact'
       spy={true}
       smooth={true}
        >Contact
        </Link>
        </li>

    </ul>)}
      
    </div>
  )
}

export default Header
