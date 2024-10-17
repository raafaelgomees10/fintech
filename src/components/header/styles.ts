import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.space.normal};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;

    > *:last-child {
      grid-row: 1;
    }
  }
`;
