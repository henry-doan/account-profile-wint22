import { Link } from 'react-router-dom';
import { AccountConsumer } from '../../providers/AccountProvider';

// if it is a () return then you can wrap the content
// in a consumer 
const MainNavbar = () => (
  <AccountConsumer>
    { value => (
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/profile'>
          {/* fill will the actual username */}
          <li>{value.username}</li>
        </Link>
      </ul>
    )}
  </AccountConsumer>
)

export default MainNavbar;