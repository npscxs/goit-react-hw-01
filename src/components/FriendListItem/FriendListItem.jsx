import clsx from "clsx";
import css from "./FriendListItem.module.css";
export default function FriendListItem({ avatar, name, isOnline }) {
  const onlineClsx = clsx(css.text, isOnline ? css.online : css.offline);
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={onlineClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
