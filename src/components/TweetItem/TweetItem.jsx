import {
  StyledAvatar,
  StyledAvatarWrap,
  StyledBottomDiv,
  StyledCard,
  StyledCardContent,
  StyledLogo,
  StyledPFollowers,
  StyledPTweets,
  StyledUpperDiv,
} from "./Tweet.styled";
import logo from '../../assets/logo.png';
import MyButton from "../UI/Button/MyButton";

export const TweetItem = ({tweet}) => {
  
  return (
    <StyledCard>
      <StyledCardContent>
        <StyledUpperDiv>
          <StyledLogo
            src={`${logo}`}
            alt="logo"
            width={76}
          />
        </StyledUpperDiv>
        <StyledAvatarWrap>
          <StyledAvatar src={tweet.avatar} alt={tweet.user} width={62} />
        </StyledAvatarWrap>
        <StyledBottomDiv>
          <StyledPTweets> {tweet.tweets} tweets</StyledPTweets>
          <StyledPFollowers>{tweet.followers} followers</StyledPFollowers>

          <MyButton children="Follow" />
        </StyledBottomDiv>
      </StyledCardContent>
    </StyledCard>
  );
};
