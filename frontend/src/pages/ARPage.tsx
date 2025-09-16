import { ARView } from '../components/ARView';
import { useNavigate, useParams } from 'react-router-dom';

export function ARPage() {
  const navigate = useNavigate();
  const { siteId } = useParams<{ siteId?: string }>();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <ARView onBack={handleBack} selectedSiteId={siteId || null} />
  );
}