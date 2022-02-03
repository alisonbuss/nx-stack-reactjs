import styled from 'styled-components';

export interface WelcomeProps {
  message: string;
}

const StyledWelcome = styled.div`
  // Common Style!
`;

export function Welcome(props: WelcomeProps) {
  return (
    <StyledWelcome>
      <h2>{props.message}</h2>
      <h1>Welcome to the ReactJS application!</h1>
    </StyledWelcome>
  );
}

export default Welcome;
