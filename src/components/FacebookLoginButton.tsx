const FacebookLogin = () => {
  const handleLogin = () => {
    const appId = process.env.REACT_APP_FACEBOOK_APP_ID;
    const redirectUri = `${process.env.REACT_APP_FRONTEND_URL}/auth/facebook/callback`;

    window.location.href = `https://www.facebook.com/v17.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&scope=email,public_profile`;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button onClick={handleLogin} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
        Login with Facebook
      </button>
    </div>
  );
};

export default FacebookLogin;
