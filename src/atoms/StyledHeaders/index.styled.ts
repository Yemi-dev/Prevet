import styled from "styled-components"

export const StyledHeader = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 1.5rem 3rem;
  align-items: center;
  justify-content: space-between;
  background-color: #FDF1F3;

  .logo-group{
    display: flex;
    justify-content: center;
    align-item:center;
    img{
      width: 100px;
      height: auto;
    }
  }

  .header-links{
    display: flex;
    width: 75%;
    justify-content: space-between;
  }

  .navigation-group{
    display: flex;
    align-items: center;
    justify-content: end;
    a{
      margin: 0 0 0 2rem;
      text-decoration: none;
      color: #555555;

      &.active{
        color:black;
        font-weight: 600;
      }

      &.active:hover{
        color:black;
      }

      &:hover{
        cursor: pointer;
        color: #919090;
      }
    }
  }

  @media (max-width:1200px){
    .logo-group{
      img{
        width: 100px;
      }
    }

    .header-links{
      width:80%;
    }
  }
  @media (max-width:990px){

    .header-links{
      width:82%;
    }
  }

`