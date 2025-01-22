import s from './FriendListItem.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.container}>
      <img className={s.img} src={avatar} alt={`${name}'s avatar`} width="48" />
      <p className={s.name}>{name}</p>
      <p className={s.isonline} style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
