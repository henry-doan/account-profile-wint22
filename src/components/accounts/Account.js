import { AccountConsumer } from "../../providers/AccountProvider";

const Account = () => (
  <AccountConsumer>
    { value => (
      <>
        <h1>{value.username}</h1>
        <p>
          Date joined: {value.dateJoined}
        </p>
        <p>Membership Level: {value.level}</p>
      </>
    )}
  </AccountConsumer>
)

export default Account;