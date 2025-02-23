import Profile from "../Profile/Profile";
import UsersData from "../../Users-data.json";
import ProfileMedia from "../ProfileMedia/ProfileMedia";

export default function App() {
  return (
    <div>
      <Profile data={UsersData} />
      <ProfileMedia data={UsersData} />
    </div>
  );
}
