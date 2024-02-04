import React from 'react';
import userData from './userData.json';
import Profile from './Profile';
import './App.css';
import FriendList from './FriendList';
import friends from './friends.json';
import '../components/FriendListItem.css';
import '../components/TransactionHistory.css';
import TransactionHistory from './TransactionHistory';
import transactions from './transactions.json';

const App = () => {
  return (
    <div className="container">
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
