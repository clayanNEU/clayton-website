import { positions } from "./data";
export default function ProfileButton() {
  function handleClick(positions) {
    alert("You clicked this position");
  }
  return <button onClick={handleClick}>Learn More</button>;
}
