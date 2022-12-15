import { useState } from 'react';
import { AccountConsumer } from '../../providers/AccountProvider';

// if it is a { return()} then we need to create a wrapper component
// to wrap the consumer with our Component
const AccountForm = ({ updateAccount }) => {
  const [user, setUser] = useState({ username: '', level: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    updateAccount(1, user)
    setUser({ username: '', level: '' })
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name='username'
          value={user.username}
          onChange={(e) => setUser({...user, username: e.target.value})}
          required
        />
        <label>Membership Level</label>
        <select
          name='level'
          value={user.level}
          onChange={(e) => setUser({...user, level: e.target.value})}
          required
        >
          <option value='Bronze'>Bronze</option>
          <option value='Silver'>Silver</option>
          <option value='Gold'>Gold</option>
          <option value='Platinum'>Platinum</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

const ConnectedAccountForm = (props) => (
  <AccountConsumer>
    { value => <AccountForm {...props} {...value} />}
  </AccountConsumer>
)

export default ConnectedAccountForm;