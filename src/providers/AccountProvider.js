import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Setup the initial context 
// modelnamecontext
// modelnameconsumer
// modelnameProvider
export const AccountContext = React.createContext();

// Create a exportable consumer, how to access to the provider
export const AccountConsumer = AccountContext.Consumer;

// Create a provider, put anything like functions and state we 
// want global for this model 
const AccountProvider = ({ children }) => {
  // const [user, setUser] = useState({ username: '', dateJoined: '', level: ''})
  const [user, setUser] = useState({ username: 'Fooman', dateJoined: '12-14-22', level: 'Bronze'})

  // useEffect( () => {
  //   axios.get("/api/users")
  //   .then( res => setUser(res.data) )
  //   .catch( err => console.log(err) )
  // }, [])

  const updateAccount = (id, user) => {
    // axios.put(`/api/users/${id}`, { user })
    // .then( res => setUser(res.data) )
    // .catch( err => console.log(err)
    setUser(user)
  }
    
  return (
    <AccountContext.Provider value={{
      // users,
      ...user,
      updateAccount,
    }}>
      { children }
    </AccountContext.Provider>
  )
}

export default AccountProvider;