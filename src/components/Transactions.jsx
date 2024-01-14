import style from './css/transactions.module.css';

const Transactions = ({ items }) => {
  return (
    <div className={style.transactionHistoryContainer}>
      <table className={style.transactionHistory}>
        <thead>
          <tr className={style.headSection}>
            <th className={style.headTable}>Type</th>
            <th className={style.headTable}>Amount</th>
            <th className={style.headTable}>Currency</th>
          </tr>
        </thead>
      </table>
      <div className={style.bodySection}>
        <table className={style.transactionHistory}>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td className={style.bodyTable}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </td>
                <td className={style.bodyTable}>{item.amount}</td>
                <td className={style.bodyTable}>{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
