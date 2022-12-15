import { useState } from 'react';

const AccountForm = ({}) => {
  const [user, setUser] = useState({ username: '', level: '' })

  const handleSubmit = (e) => {
    e.preventDefault()

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

export default AccountForm;