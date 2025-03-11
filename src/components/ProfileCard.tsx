import { Card, Avatar, Typography, Select, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { Option } = Select;

interface ProfileCardProps {
  user: { name: string; picture: string; email: string };
  pages: { id: string; name: string }[];
  onPageSelect: (pageId: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  user,
  pages,
  onPageSelect,
}) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card
        className="w-96 shadow-lg rounded-lg text-center"
        title={user.name}
        extra={
          <Button onClick={handleLogout} type={"primary"}>
            Logout
          </Button>
        }
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Avatar
            size={100}
            src={user.picture}
            icon={<UserOutlined />}
            className="mx-auto mb-4"
          />
          <Text type="secondary" className="red">
            {user.email}
          </Text>
          <Select
            placeholder="Select a Page"
            className="w-full mt-4"
            onChange={onPageSelect}
          >
            {pages &&
              pages.map((page) => (
                <Option key={page.id} value={page.id}>
                  {page.name}
                </Option>
              ))}
          </Select>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
