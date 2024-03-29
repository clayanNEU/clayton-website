import { positions } from "./data";
import ProfileButton from "./ProfileButton";

export default function Profile() {
  const listItems = positions.map((position) => (
    <li key={position.id}>
      <h1>{position.profession}</h1>
      <h3>{position.company}</h3>
      <p>{position.accomplishment}</p>
      <ProfileButton></ProfileButton>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
