import styled, { css } from "styled-components";

const GeneralStyles = css`
  background-color: ${(props) => props.theme.colors.color4};
  border-radius: ${(props) => props.theme.space.normal};
  color: ${(props) => props.theme.colors.color2};
  font-size: 1rem;
  padding: ${(props) => props.theme.space.small} 0.75rem;
`;

export const Label = styled.label`
  ${GeneralStyles}
  display: block;
  font-weight: 600;
  margin-bottom: ${(props) => props.theme.space.small};
`;

export const Input = styled.input`
  ${GeneralStyles}
  border: none;
  font-family: monospace;
`;
