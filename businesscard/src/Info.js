let userData = {
  name: "Jorge Ramos Posadas",
  title: "Frontend Developer",
  email: "daniel10.ramos21@gmail.com",
};

function ProfilePic() {
  return <img src="me.JPG" alt="Profile Pic" className="profile-pic"></img>;
}
function UserInfo() {
  return (
    <header className="user-name">
      <h1>{userData.name}</h1>
      <h2>{userData.title}</h2>
      <h4>{userData.email}</h4>
    </header>
  );
}
function Buttons() {
  return (
    <nav className="buttons-social">
      <button>Email</button>
    </nav>
  );
}
function InfoCard() {
  return (
    <div className="wrapper-card">
      <ProfilePic />
      <UserInfo />
      <Buttons />
    </div>
  );
}

export default InfoCard;
