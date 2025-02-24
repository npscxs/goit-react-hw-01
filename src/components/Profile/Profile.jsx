import css from "./Profile.module.css";
export default function Profile(props) {
  return (
    <div className={css.container}>
      <img className={css.img} src={props.image} alt="User avatar" />
      <p className={css.name}>{props.name}</p>
      <p className={css.text}>@{props.tag}</p>
      <p className={css.text}>{props.location}</p>
      <ul className={css.listMedia}>
        <li className={css.itemMedia}>
          <span>Followers</span>
          <span className={css.numbers}>{props.stats.followers}</span>
        </li>
        <li className={css.itemMedia}>
          <span>Views</span>
          <span className={css.numbers}>{props.stats.views}</span>
        </li>
        <li className={css.itemMedia}>
          <span>Likes</span>
          <span className={css.numbers}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
