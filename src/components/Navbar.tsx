import logo from '../assets/img/h2i_logo.svg';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Navbar() {

  return (
    <nav className="navbar">
      <img className='logo' src={logo} alt='Timesheet 2 Invoice' />
      <div className='navlinks'>
        <IconButton aria-label="GitHub link" color='primary'>
          <GitHubIcon />
        </IconButton>
      </div>
    </nav>
  )
}