import styled from 'styled-components'

export const FooterSection = styled.div`
  background-color: #141520;
  padding: 8rem 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  &.open{
    opacity: 0.3;
}
  @media (max-width: 420px){
    padding:6rem 2rem;
  }
`

 export const ContactStyles = styled.div`
width: 30%;
    h5{
        padding: .3rem 0;
        color: white;
        font-weight: 600;
    }
    .border-highlight{
        width: 25px;
        height: 2px;
        background-color: #EF4325;
        margin-bottom: 2rem;
    }
    .contact-response{
        color: #CCCCCC;
        width: 100%;
        font-size: .7rem;
    }
    .bg{
        background-color: green;
        padding: .5rem;
        margin: 1rem 0;
    }
    .contact-form{
        p{
            color: #CCCCCC;
            margin-bottom: 1rem;
            font-size: .8rem;
        }
        .input-group{
            width: 100%;
            input{
                width: 100%;
                margin-bottom: 1rem;
                border: none;
                border-radius: 5px;
                padding:.5rem;
                background-color: #262731;
                color: #CCCCCC;
                &::placeholder{
                    color: #CCCCCC;
                    font-size: .6rem;
                }
            }
        }
        .textarea-group{
            width: 100%;
            textarea{
                width: 100%;
                border: none;
                border-radius: 5px;
                padding: .3rem .5rem;
                background-color: #262731;
                color: #CCCCCC;
                &::placeholder{
                    color: #CCCCCC;
                    font-size: .6rem;
                }
            }
        }
       

        button{
            margin: 1rem 0;
            padding: .3rem 1rem;
        }
    }

    @media (max-width: 768px){
        width: 70%;
    }
    @media (max-width: 420px){
        width: 100%;
        .contact-response{
            font-size: .6rem;
        }
        .contact-form{
            p{
                font-size: .6rem;
            }
            .input-group{
                input{
                    font-size: .6rem;
                }
            }
            .textarea-group{
                textarea{
                    font-size: .6rem;
                }
            }
            button{
                font-size: .7rem;
            }
        }
        
    }
    `

 export const QuicklinksStyles = styled.div`
width: 30%;
margin-bottom: 3rem;
    h5{
        padding: .3rem 0;
        color: white;
        font-weight: 600;
    }
    .border-highlight{
        width: 25px;
        height: 2px;
        background-color: #EF4325;
        margin-bottom: 2rem;
    }
    .footer-links{
        display: flex;
        flex-direction: column;
        align-items: start;
        a{
            text-decoration: none;
            margin-bottom: 1rem;
            color: #CCCCCC;
            font-size: .8rem;
            &:hover{
                color: #555555;
            }
        }
        
    }
    @media (max-width: 768px){
        width: 30%;
    }
    @media (max-width: 420px){
        width: 100%;
        .footer-links{
            a{
                font-size: .7rem;
            }
        }
    }
`

export const AboutStyles = styled.div`
    width: 40%;
    margin-bottom: 3rem;
    h5{
        padding: .3rem 0;
        color: white;
        font-weight: 600;
    }
    .border-highlight{
        width: 25px;
        height: 2px;
        background-color: #EF4325;
        margin-bottom: 2rem;
    }
    .about-texts{
        color: #CCCCCC;
        font-size: .8rem;
        margin: 2rem 0;
        width: 60%;
    }
    @media (max-width: 768px){
        width: 70%;
        .about-texts{
            width: 80%;
        }
    }
    @media (max-width: 420px){
        width: 100%;
        .about-texts{
            width: 100%;
            font-size: .7rem;
        }
    }
`