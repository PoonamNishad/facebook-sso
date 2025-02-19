import { Card, Typography } from "antd";
const { Title, Text } = Typography;

interface InsightsProps {
  insights: {
    followers: number;
    engagement: number;
    impressions: number;
    reactions: number;
  };
}

const PageInsightsCards: React.FC<InsightsProps> = ({ insights }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
      <Card className="shadow-lg rounded-lg text-center">
        <Title level={4}>Total Followers</Title>
        <Text className="text-xl font-semibold">{insights?.followers}</Text>
      </Card>
      <Card className="shadow-lg rounded-lg text-center">
        <Title level={4}>Total Engagement</Title>
        <Text className="text-xl font-semibold">{insights?.engagement}</Text>
      </Card>
      <Card className="shadow-lg rounded-lg text-center">
        <Title level={4}>Total Impressions</Title>
        <Text className="text-xl font-semibold">{insights?.impressions}</Text>
      </Card>
      <Card className="shadow-lg rounded-lg text-center">
        <Title level={4}>Total Reactions</Title>
        <Text className="text-xl font-semibold">{insights?.reactions}</Text>
      </Card>
    </div>
  );
};

export default PageInsightsCards;
