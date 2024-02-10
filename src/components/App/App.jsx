import React from 'react';
import userData from '../data/userData.json';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import friends from '../FriendList/friends.json';

import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
