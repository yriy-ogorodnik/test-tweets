
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/TweetItem/Tweet.styled';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>Welcome to the tweets app!</h1>
        <Button
          onClick={() => {
            navigate('/tweets');
          }}
        >
          To the tweets
        </Button>
      </div>
    </div>
  );
};

export default Home;