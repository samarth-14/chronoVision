import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';

export function HomePage() {
  const navigate = useNavigate();

  const handleARViewClick = (siteId?: string) => {
    if (siteId) {
      navigate(`/ar/${siteId}`);
    } else {
      navigate('/ar');
    }
  };

  return (
    <>
      <Hero onARViewClick={handleARViewClick} />
      <Categories />
    </>
  );
}