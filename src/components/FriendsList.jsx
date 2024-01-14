import style from './css/friendslist.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      <li className={style.friendsTitle}>Friends list</li>
      {friends.map(friend => (
        <li className={style.item} key={friend.id}>
          <span
            className={`${
              friend.isOnline ? style.statusOnline : style.statusOffline
            }`}
          ></span>
          <img
            className={style.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={style.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
