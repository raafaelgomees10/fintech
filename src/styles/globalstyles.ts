import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body{
    background-color: ${(props) => props.theme.colors.color4};
    color: ${(props) => props.theme.colors.color2};
    font-family: sans-serif;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
}

h1,h2,h3{
    font-weight: 600;
    margin: 0px;
}

ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
}

button{
    cursor: pointer;
    font-family: sans-serif;
}

.container{
    display: grid;
    padding: ${(props) => props.theme.space.normal};
    gap: ${(props) => props.theme.space.normal};
    grid-template-columns: 240px auto;

    @media (max-width: 767px){
        grid-template-columns: 1fr;
    }
}

.box{
    background: ${(props) => props.theme.colors.color5};
    border-radius: ${(props) => props.theme.space.normal};
    padding: ${(props) => props.theme.space.normal};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
   
    /* outline: 2px solid ${(props) => props.theme.colors.color1}; */
}

.flex{
    display: flex;
    gap: ${(props) => props.theme.space.normal};

    @media (max-width: 767px){
        flex-direction: column;
    }

    > * {
        flex: 1;
    }
}

.mb{
    margin-bottom: ${(props) => props.theme.space.normal};
}

.bg1{
    background: ${(props) => props.theme.colors.color1};
}

.bg2{
    background: ${(props) => props.theme.colors.color2};
}

.bg3{
    background: ${(props) => props.theme.colors.color3};
}

.bg4{
    background: ${(props) => props.theme.colors.color4};
}
.bg5{
    background: ${(props) => props.theme.colors.color5};
}

/* SUMARY */
.sumary{
    font-size: 1.5rem;
    font-weight: 600;

    @media (max-width: 1000px){
        flex-direction: column;
    }
}

.sumary h2{
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.color1};
    margin-bottom: ${(props) => props.theme.space.normal};
}
`;
