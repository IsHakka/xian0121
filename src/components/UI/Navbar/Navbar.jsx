import  { useState } from 'react';
import { menu, close, logo } from '../../../assets';
import { Link} from 'react-router-dom';
import classes from './Navbar.module.scss'
import { navLinks } from '../../../constants/index'

const Navbar = () => { 
  // menu狀態
  const [active, setActive] = useState('');
  // 手機版選單開關
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={classes.Navbar}>
      <div className={classes.Header}>
        <Link to='/' className={classes.HomeLink} onClick={() => { setActive(''); window.scrollTo(0, 0); }}>
          <img src={logo} alt="logo" className={classes.Logo} />
          <div>
            <p className={classes.WebTitle}>Hakka</p>
            <p>| Xian's Portfolio</p>
          </div>
        </Link>
        <ul className={classes.Menu}>
          {/* 展開menu */}
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? classes.ActiveLink : classes.DefaultLink
                } `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className={classes.SideMenu}>
                <img src={toggle ? close : menu} onClick={()=>{setToggle(!toggle)}} alt="menu" className={classes.HamburgerBox}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar