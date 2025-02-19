import Button from "antd/es/button";
import { FacebookFilled } from "@ant-design/icons";

const FacebookLoginButton = () => {
  const handleLogin = () => {
    const appId = process.env.REACT_APP_FACEBOOK_APP_ID;
    const redirectUri = `${process.env.REACT_APP_FRONTEND_URL}/auth/facebook/callback`;

    window.location.href = `https://www.facebook.com/v17.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&scope=email,public_profile`;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Button 
          type="default" 
          onClick={handleLogin}
          icon={<FacebookFilled />} 
          className="w-full bg-blue-600 text-white hover:bg-blue-700"
        >
          Login with Facebook
        </Button>
    </div>
  );
};

export default FacebookLoginButton;
