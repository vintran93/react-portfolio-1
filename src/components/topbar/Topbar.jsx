import './topbar.scss'
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';


const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && 'active')}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">Coder.</a>
            <div className="itemContainer">
              <PersonIcon className='icon'/>
              <span>(972) 259-7677</span>
            </div>
            <div className="itemContainer">
              <MailIcon className='icon'/>
              <span>vincentran93@gmail.com</span>
            </div>
          </div>
          
          <div className="right">
              <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Topbar