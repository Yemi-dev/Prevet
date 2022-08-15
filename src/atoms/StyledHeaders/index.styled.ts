import styled from "styled-components"

export const StyledHeader = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 1.5rem 3rem;
  align-items: center;
  justify-content: space-between;
  background-color: #FDF1F3;
  position: relative;
  &.open {
    opacity: 0.3;
 }
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

  .menu-group{
    position: absolute;
    img{
      width: 35px;
      cursor: pointer;
      display: none;
      &:hover{
        opacity: 0.7;
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
    .logo-group{
      img{
        width: 80px;
      }
    }
    .header-links{
      width:82%;
      .navigation-group{
        a{
          font-size: .75rem;
          white-space: nowrap;
          margin: 0 .3rem;
        }
      }
    }
    div{
      a{
        padding: .3rem 1rem;
        font-size: .7rem;
        margin: .5rem .5rem 0 .5rem;
      }
    }
  }
  @media (max-width:768px){
    .header-links{
      display: none;
    }
    .menu-group{
      position: relative;
      img{
        cursor: pointer;
        display: flex;
      }
    }
  }
  @media (max-width:420px){
    padding: 1.5rem 2rem;
    }
  }

`