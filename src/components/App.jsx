import style from './css/app.module.css';
import Profile from './Profile';
import user from './ass/user.json';
import data from './ass/data.json';
import Statistics from './Statistics';
import FriendsList from './FriendsList';
import friends from './ass/friends.json';
import Transactions from './Transactions';
import TransactionsApp from './ass/transactions.json';
export const App = () => {
  return (
    <div className={style.components}>
      <div className={style.leftComponents}>
        <FriendsList friends={friends} />
        <div className={style.userStats}>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
          <Statistics title="Upload stats" stats={data} />
        </div>
      </div>
      <Transactions items={TransactionsApp} />
    </div>
  );
};
