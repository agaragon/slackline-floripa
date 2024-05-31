import { useNavigate } from 'react-router-dom';

const useNavigationService = () => {
  const navigate = useNavigate();

  const goToClasses = () => {
    navigate('/classes');
  };

  const goToLearnMore = () => {
    navigate('/learn-more');
  };

  return {
    goToClasses,
    goToLearnMore,
  };
};

export default useNavigationService;
