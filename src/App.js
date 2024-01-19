import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile";
import ProfileButton from "./ProfileButton";
import Posts from "./Posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Posts></Posts>
        <Profile></Profile>
      </header>
    </div>
  );
}

export default App;
