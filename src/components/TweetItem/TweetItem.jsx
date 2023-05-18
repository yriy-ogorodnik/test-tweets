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
import logo from '../../assets/react.svg';
import MyButton from "../UI/Button/MyButton";

export const Tweet = ({}) => {
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
          <StyledAvatar />
        </StyledAvatarWrap>
        <StyledBottomDiv>
          <StyledPTweets>tweets</StyledPTweets>
          <StyledPFollowers>followers</StyledPFollowers>

          <MyButton children="Follow" />
        </StyledBottomDiv>
      </StyledCardContent>
    </StyledCard>
  );
};
