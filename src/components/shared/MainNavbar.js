import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <ul>
    <Link to='/'>
      <li></li>
    </Link>
    <Link to='/profile'>
      {/* fill will the actual username */}
      <li>username</li>
    </Link>
  </ul>
)

export default MainNavbar;