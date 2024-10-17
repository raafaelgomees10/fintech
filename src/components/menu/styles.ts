import styled from "styled-components";

export const SideNav = styled.nav``;

export const List = styled.ul`
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Item = styled.li`
  align-items: center;
  display: flex;
  gap: ${(props) => props.theme.space.small};

  > a {
    color: ${(props) => props.theme.colors.color1};
    cursor: pointer;
    flex: 1;
    font-size: 1.125rem;
    margin: 0.25rem 0;
    padding: ${(props) => props.theme.space.small} 0;
    text-decoration: none;

    @media (max-width: 767px) {
      font-size: 0.875rem;
    }
  }

  &:hover span {
    background: ${(props) => props.theme.colors.color3};
  }
`;

export const Span = styled.span`
  align-items: center;
  background: ${(props) => props.theme.colors.color4};
  border-radius: ${(props) => props.theme.space.normal};
  display: flex;
  height: 2rem;
  justify-content: center;
  width: 2rem;
`;
