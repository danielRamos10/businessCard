let userData ={
  name: 'Jorge Ramos Posadas',
  title: 'Frontend Developer',
  email: 'daniel10.ramos21@gmail.com'
};

function ProfilePic(){
  return(
    <img src="" alt="Profile Pic"></img>
  );
}
function UserInfo()
{
  return(
    <header><h1>{userData.name}</h1>
    <h2>{userData.title}</h2>
    <h4>{userData.email}</h4></header>
  );
}
function Buttons(){
  return(
    <nav>
    <button>Email</button>
    <button>Linkedin</button></nav>
  );
}
function InfoCard() {
  return(
  <div>
    <ProfilePic/>
    <UserInfo/>
    <Buttons/>
  </div>
  );
}

export default InfoCard;
