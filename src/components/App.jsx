const Profile = props => {
  return (
    <div>
      <img src="" alt="Jacob Mercer" width="180" height="180" />
      <h2>Jacob Mercer</h2>
      <p>j.mercer@mail.com</p>
      <p>32</p>
    </div>
  );
};

function App() {
  return (
    <p>
      App
      <Profile />
    </p>
  );
}

export default App;
