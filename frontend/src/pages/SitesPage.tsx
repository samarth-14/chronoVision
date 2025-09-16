import { FeaturedSites } from '../components/FeaturedSites';
import { useNavigate } from 'react-router-dom';

export function SitesPage() {
  const navigate = useNavigate();

  const handleARViewClick = (siteId?: string) => {
    if (siteId) {
      navigate(`/ar/${siteId}`);
    } else {
      navigate('/ar');
    }
  };

  return (
    <div className="min-h-screen bg-card text-card-foreground">
      <FeaturedSites onARViewClick={handleARViewClick} />
    </div>
  );
}