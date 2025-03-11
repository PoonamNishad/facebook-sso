import ProfileCard from "../components/ProfileCard";
import PageInsightsCards from "../components/PageInsightsCards";
import { useEffect, useState } from "react";
import axios from "axios";
import { dummyInsights } from "../userdemodata";

const Profile = ({ user, pages }) => {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [insights, setInsights] = useState({
    followers: 0,
    engagement: 0,
    impressions: 0,
    reactions: 0,
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fbToken = localStorage.getItem("fbToken");
    if (fbToken && token) {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/user/pagesInsights?pageId=${selectedPage}`,
          { headers: { Authorization: `Bearer ${fbToken}` } }
        )
        .then((res) => {
          setInsights(res.data.data);
        })
        .catch(() => setInsights(null));
    }
  }, [selectedPage]);

  const handlePageChange = (pageId: string) => {
    setSelectedPage(pageId);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <ProfileCard user={user} pages={pages} onPageSelect={handlePageChange} />
      {selectedPage && (
        <div className="mt-6">
          <PageInsightsCards insights={insights} />
        </div>
      )}
    </div>
  );
};

export default Profile;
