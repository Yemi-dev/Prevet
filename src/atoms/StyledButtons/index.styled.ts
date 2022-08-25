import styled from 'styled-components'

interface BtnProps {
    variant?: string;
    size?: string;
    type?: string;
}


export const StyledButtonLinks = styled.div<BtnProps>`
    a{
        text-decoration: none;
        color:${({variant}) => variant === "primary" ? "#EF4325" : "white"} ;
        background-color: ${({variant}) => variant === "primary" ? "white" : "#EF4325"};
        padding: ${({size}) => size === "sm" ? "0.5rem .8rem" : "0.7rem 2rem"};
        margin: 0 1rem  ${({size}) => size === "sm" ? " 0 .1rem " : " 0 1rem "};
        border-radius: 50px;
        white-space: nowrap;
        border: 2px solid transparent;
        font-size: ${({size}) => size === "sm" ? ".8rem" : "1rem"}
         ;
         cursor: pointer;
        &:hover{
            color:#EF4325 ;
            background-color: white;
            border-color: #EF4325;
        }
    }
    
`

export const StyledButton = styled.button<BtnProps>`
        color:${({variant}) => variant === "primary" ? "#EF4325" : "white"} ;
        background-color: ${({variant}) => variant === "primary" ? "white" : "#EF4325"};
        padding: ${({size}) => size === "sm" ? "0.5rem .8rem" : "0.7rem 2rem"};
        margin: 0 1rem  ${({size}) => size === "sm" ? " 0 .1rem " : " 0 1rem "};
        border-radius: 50px;
        white-space: nowrap;
        border: 2px solid transparent;
        font-size: ${({size}) => size === "sm" ? ".8rem" : "1rem"} ;
        cursor: pointer;
        &:hover{
            color:#EF4325 ;
            background-color: white;
            border-color: #EF4325;
        }
`
