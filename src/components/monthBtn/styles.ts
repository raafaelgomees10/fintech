import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.color3};
  border: none;
  border-radius: ${(props) => props.theme.space.normal};
  color: ${(props) => props.theme.colors.color2};
  font-weight: 600;
  padding: ${(props) => props.theme.space.normal}
    ${(props) => props.theme.space.small};
  text-transform: capitalize;
`;
