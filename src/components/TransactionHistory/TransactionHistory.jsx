import s from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>
      {items.map(items => (
        <tbody key={items.id} className={s.tbody}>
          <tr className={s.tr}>
            <td className={s.td}>{items.type}</td>
            <td className={s.td}>{items.amount}</td>
            <td className={s.td}>{items.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default TransactionHistory;
