import React from 'react';
import userData from './userData.json';
import Profile from './Profile';
import FriendList from './FriendList';
import friends from './friends.json';

import TransactionHistory from './TransactionHistory';
import transactions from './transactions.json';
import styles from '../components/App.module.css';

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
