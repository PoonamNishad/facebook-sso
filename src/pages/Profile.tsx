
const Profile = ({ user }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="text-center">
      <h2>Welcome, {user.name}</h2>
      <img src={user.picture} alt="Profile" className="rounded-full w-24 h-24 mx-auto" />
      <p>{user.email}</p>
      <button onClick={handleLogout} className="bg-red-600 text-white p-2 rounded mt-4">
        Logout
      </button>
    </div>
  );
};

export default Profile;
