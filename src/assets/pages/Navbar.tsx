import '../css/navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div><a className="logo" href="/">LOGO</a></div>
      <ul className="nav-right">
        <li><a href="/" className='nav-item-link'>ITEM</a></li>
        <li><a href="/" className='nav-item-link'>ITEM</a></li>
        <li><a href="/" className='nav-item-link'>ITEM</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
