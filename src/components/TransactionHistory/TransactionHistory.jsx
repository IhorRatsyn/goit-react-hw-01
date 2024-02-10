import TransactionRow from './TransactionRow';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <TransactionRow key={transaction.id} {...transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
