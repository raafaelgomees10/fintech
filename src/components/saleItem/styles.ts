import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: grid;
  gap: ${(props) => props.theme.space.normal};
  grid-template-columns: auto auto 1fr;
  margin-bottom: ${(props) => props.theme.space.small};

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  > div:last-child {
    justify-self: end;

    @media (max-width: 767px) {
      justify-self: start;
    }
  }

  > a {
    text-decoration: none;
    color: inherit;
  }
`;
