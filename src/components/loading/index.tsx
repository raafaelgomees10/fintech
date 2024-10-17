import styled, { keyframes } from "styled-components";

const spin = keyframes`
to{
    transform: rotate(360deg)
}`;

const Container = styled.div`
  border: ${(props) => props.theme.space.small} solid
    ${(props) => props.theme.colors.color2};
  border-right-color: ${(props) => props.theme.colors.color4};
  width: ${(props) => props.theme.space.normal};
  height: ${(props) => props.theme.space.normal};
  border-radius: 50%;
  animation: ${spin} 1s infinite;
`;

const Loading = () => {
  return <Container />;
};

export default Loading;
