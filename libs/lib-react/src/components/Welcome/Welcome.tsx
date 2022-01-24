import styled from 'styled-components';

export interface WelcomeProps {
  message: string;
}

const StyledWelcome = styled.div`
  color: pink;
`;

export function Welcome(props: WelcomeProps) {
  return (
    <StyledWelcome>
      <h1>{props.message}</h1>
    </StyledWelcome>
  );
}

export default Welcome;
