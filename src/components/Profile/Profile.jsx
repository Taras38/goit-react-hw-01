import s from './Profile.module.css';
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.container}>
      <div>
        <img className={s.img} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.item}>@{tag}</p>
        <p className={s.item}>{location}</p>
      </div>

      <ul className={s.list}>
        <li>
          <span>Followers</span>
          <br />
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <br />
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <br />
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
