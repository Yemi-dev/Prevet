import styled from 'styled-components'
import HeroBannerImg from '../../assets/heroBanner5.png'
import EarnBanner from "../../assets/earnBanner.png"
import EarnBanner2 from "../../assets/earnBanner2.png"

 export const HeroSection = styled.div`
    background-color: #F7F7F7;
    &.open {
        opacity: 0.1;
     }
    .before{
        display: flex;
        background: url('https://res.cloudinary.com/dmixz7eur/image/upload/v1643722061/prevet/img1_holc16.png');
        background-repeat: no-repeat;
        justify-content: space-between;
        width: 100%;
        .hl-group{
            width: 50%;
            height: 500px;
            padding: 2rem;
            display: flex;
            justify-content: end;
            align-items: center;
            .hl-sub-group{
                width: 90%;
                .hero-left{
                    font-size: 3.7rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: white;
                }
                p{
                    color: white;
                    font-size: 1.1rem;
                    margin: 1rem 0;
                    font-weight: 300
                }
                .hl-links{
                    margin: 2rem auto;
                    display: flex;
                    div{
                        a{
                            margin: 0 1rem 0 0
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1260px){
        .before{
            .hl-group{
                .hl-sub-group{
                    width: 90%;
                    .hero-left{
                        font-size: 3.2rem;
                    }
            }
        } 
        }
    }
    @media (max-width: 995px){
        .before{
            .hl-group{
                .hl-sub-group{
                    width: 90%;
                    .hero-left{
                        font-size: 2.3rem;
                    }
                    p{
                        font-size: .9rem
                    }
                    .hl-links{
                        div{
                            a{
                              padding: .3rem 1rem;
                              font-size: .7rem;
                              margin: .5rem .5rem 0 0;
                            }
                          }
                    }
            }
        } 
        }
    }
    @media (max-width: 768px){
        .before{
            .hl-group{
                .hl-sub-group{
                    width: 100%;
                    .hero-left{
                        font-size: 2rem;
                    }
                    p{
                        font-size: .7rem
                    }
            }
        } 
        }
    }
    @media (max-width: 650px){
        width: 100%;
        .before{
            justify-content: center;
            align-items: center;
            .hl-group{
                width: 100%;
                height: 600px;
                .hl-sub-group{
                    width: 100%;
                    text-align: center;
                    .hero-left{
                        font-size: 2rem;
                        font-weight: 500;
                    }
                    p{
                        width: 60%;
                        font-size: .7rem;
                        margin: 1rem auto;
                    }
                    .hl-links{
                        justify-content: center;
                    }
            }
        } 
        }
    }

`

 export const HeroBannerBackground = styled.div`
    width: 50%;
    height: 750px;
    &.open {
        opacity: 0.3;
     }
    .hb{
        margin-top: -50px;
        background-position: right;
        background-image: url(${HeroBannerImg});
        width: 100%;
        height: 800px;
        background-repeat: no-repeat;
        background-size: contain;
    }

    @media (max-width: 768px){
        height: 700px;
        .hb{
            margin-top: -150px;
        }
    }

    @media (max-width: 650px){
      display: none
    }
    
`
 export const HeroCardSection = styled.div`
    width: 100%;
    padding: 2rem;
    background-color: #FAFAFA;
    .hc-section{
        display: grid;
        justify-content: center;
        grid-template-columns: auto auto auto;
        gap: 0px 50px;
        width: 80%;
        margin: -250px auto 0;
    }

    @media (max-width: 900px){
        .hc-section{
           grid-template-columns: auto;
           width: 60%;
        }
    }

    @media (max-width: 650px){
        .hc-section{
            margin: -150px auto 0;
        }
    }
    @media (max-width: 420px){
        .hc-section{
           grid-template-columns: auto;
           width: 80%;
        }
    }
`
export const Card = styled.div`
    background-color: #EEEEEE;
    border-radius: 10px;
    border: 3px solid #EEEEEE;
    box-shadow:  0px 4px 14px rgba(170, 170, 170, 0.25);
    margin: 2rem auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: fit-content;
    img{
        width: 80px;
        margin: 1rem auto;
    }
    h4{
        margin-bottom: 1rem;
        font-weight: 600;
        font-size: 1.2rem;
    }
    p{
        font-size: .9rem;
        color: #555555;
        text-align: center;
    }
    
    .hc-links{
        display:flex;
        justify-content: center;
        align-items: center;
        margin: 1rem auto;
        width: 100%;
        a{
            font
        }
    }

    @media (max-width: 1200px){
        img{
            width: 50px;
        }
    }
    @media (max-width: 650px){
        h4{
            font-size: 1rem;
        }
        p{
            font-size: .7rem;
        }
    }
`
export const HeroSummaryStyles = styled.div`
    width: 100%;
    padding: 8rem 4rem;
    h2{
        font-size: 3rem;
        font-weight: 600;
    }
    .summary-group{
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 5rem;
        margin: 3rem auto;
        .summary-sub-group{
            display: flex;
            align-items: center;
            img{
                width: 80px;
                margin-right: 2rem;
            }
            p{
                font-size: 1rem;
                color: #555555;
                width: 70%;
            }
        }
    }
    @media (max-width: 990px){
        h2{
            font-size: 2.5rem;
        }
        .summary-group{
            grid-gap: 3rem;
            .summary-sub-group{
                img{
                    width: 80px;
                    margin-right: 1rem;
                }
                p{
                    font-size: .7rem;
                }
            }
        }
    }

    @media (max-width: 768px){
        h2{
            font-size: 2rem;
        }
        .summary-group{
            grid-template-columns: auto;
            .summary-sub-group{
                img{
                    width: 50px;
                    margin-right: 1rem;
                }
                p{
                    font-size: .7rem;
                    width: 100%;
                }
            }
        }
    }
    @media (max-width: 500px){
        padding: 4rem 0rem;
        h2{
            font-size: 1.5rem;
        }
        .summary-group{
            grid-template-columns: auto;
            .summary-sub-group{
                img{
                    width: 40px;
                    margin-right: 1rem;
                }
                p{
                    font-size: .6rem;
                    width: 100%;
                }
            }
        }
    }

`

 export const EarnSection = styled.div`
    background-color: #EEEEEE;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 0;
    &.open {
        opacity: 0.3;
     }
    .earn-banner{
        background: url(${EarnBanner}) no-repeat center;
        background-size: contain;
        height: 600px;
        width: 50%;
    }
    .earn-right{
        width: 50%;
        padding: 0 2rem;
        margin: 0 auto;
        h2{
            font-size: 2.8rem;
            margin-bottom: 2rem;
            font-weight: 600;
        }
        p{
            color: #555555;
            width: 80%;
            margin-bottom: 2.5rem;
        }
        div{
            a{
                margin: 0;
            }
        }
    }
    @media (max-width:768px){
        .earn-right{
            h2{
                font-size: 2rem
            }
            p{
                font-size: .7rem;
                margin-bottom: 1.5rem;
            }
            div{
                a{
                    margin: 0;
                    padding: .5rem 1.5rem;
                    font-size: .7rem;
                }
            }
        }
    }
    @media (max-width:600px){
        flex-direction: column;
        .earn-banner{
            width: 100%;
            height: 400px;
            margin-bottom: 2rem;
        }
        .earn-right{
            width: 100%;
            text-align: center;
            padding: 3rem 0;
            h2{
                font-size: 2rem;
                margin-bottom: 1rem;
            }
            p{
                font-size: .7rem;
                margin-bottom: 1.5rem;
                margin: 1rem auto 1.5rem;
                width: 70%;
            }
            div{
                a{
                    margin: 0;
                    padding: .5rem 1.5rem;
                    font-size: .7rem;
                }
            }
        }
    }
`

export const EarnSubSection = styled.div`
    background-color: #FAFAFA;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 4rem;
    &.open{
        opacity: 0.3;
    }
    .earn-banner{
        background: url(${EarnBanner2}) no-repeat center;
        background-size: contain;
        height: 600px;
        width: 50%;
    }
    .earn-right{
        width: 50%;
        padding: 0 2rem;
        margin: 0 auto;
        h2{
            font-size: 2.2rem;
            margin-bottom: 2rem;
            font-weight: 600;
        }
        .earn-highlights{
            display:flex;
            align-items: center;
            margin-top: 1.5rem;
            img{
                width: 20px;
                margin-right: 1rem;
            }
        p{
            color: #555555;
        }
        }
        div{
            margin-top: 2.5rem;
            a{
                margin: 0;
            }
        }
    }
    @media (max-width: 768px){
        .earn-right{
            h2{
                font-size: 1.8rem;
            }
            .earn-highlights{
                p{
                    font-size: .7rem;
                }
            }
            div{
                margin-top: 1.5rem;
                a{
                    padding: .5rem 1.5rem;
                    font-size: .7rem;
                }
            }
        }
    }
    @media (max-width: 600px){
        flex-direction: column-reverse;
        .earn-banner{
            width: 100%;
            height: 400px;
            margin-bottom: 2rem;
        }
        .earn-right{
            width: 100%;
            padding: 1rem 0;
            h2{
                font-size: 1.8rem;
            }
            .earn-highlights{
                p{
                    font-size: .7rem;
                }
            }
            div{
                margin-top: 1.5rem;
                a{
                    padding: .5rem 1.5rem;
                    font-size: .7rem;
                }
            }
        }
    }
    @media (max-width: 420px){
        padding: 5rem 2rem;
        .earn-right{
            h2{
                font-size: 1.5rem;
            }
            .earn-highlights{
                p{
                    font-size: .7rem;
                }
            }
            div{
                margin-top: 1.5rem;
                a{
                    padding: .5rem 1rem;
                    font-size: .7rem;
                }
            }
        }
    }
`
export const FAQSection = styled.div`
    background-color: #FDF1F3;
    padding: 7rem 4rem;
    &.open {
        opacity: 0.3;
     }
    .faq-title{
        text-align: center;
        font-size: 2.5rem;
        margin: 3rem auto;
    }
    @media (max-width: 768px){
        .faq-title{
            font-size: 2rem;
        }
    }
    @media (max-width: 420px){
        .faq-title{
            font-size: 1.5rem;
        }
    }
    @media (max-width: 420px){
        padding: 7rem 2rem;
    }
`

export const FAQCard = styled.div`
    background-color: white;
    border: none;
    border-radius: 30px;
    width: 70%;
    margin: 1rem auto;
    height: fit-content;
    padding: 2rem;
    box-shadow: 0 4px 4px #00000015;
    @media (max-width: 768px){
       width: 80%;
    }
    @media (max-width: 650px){
       width: 100%;
    }
`

 export const FAQLink = styled.div`
    margin: 2rem auto;
    display: flex;
    justify-content: center;
        a{
            color: #EF4325;
            text-decoration: none;
            cursor: pointer;
            margin-left: .5rem;
            &:hover{
                color: #555555;
            }
        }

        @media (max-width: 420px){
            font-size: .7rem;
            white-space: nowrap;
        }
 `

 export const FAQGroup = styled.div`
    margin: 1rem auto;
    .faqs {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem auto;
        .question{
            color: #222222;
            width: 75%;
        }
        img {
            cursor: pointer;
            }
         }
    .response {
        padding: 1.5rem 1rem 1.5rem 0;
        color: #555555;
        font-size: .8rem;
            }
    hr {
        border: .5px solid #DDDDDD;
    }

    @media (max-width:768px){
        .faqs{
            .question{
                font-size: .8rem;
            }
        }
        .response{
            font-size: .6rem;
        }
    }
`

export const InfoSection = styled.div`
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 7rem 4rem;
    &.open {
        opacity: 0.3;
     }
    h2{
        font-size: 2.5rem;
        font-weight: 600;
    }
    p{
        color: #555555;
        width: 30%;
        text-align: center;
        margin: 1.5rem auto;
    }
    .socials-icons{
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        grid-gap: 10px;
    }
    @media (max-width: 600px){
        padding: 7rem 2rem; 
        h2{
            font-size: 1.5rem;
        }
        p{
            font-size: .7rem;
            width: 60%;
        }
        .socials-icons{
            a{
                img{
                    width: 30px;
                }
            }
        }
    }
`
export const ModalContactStyles = styled.div`
width: 60%;
margin: 1rem auto;
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
        .contact-title{
            color: #CCCCCC;
            margin: 1rem 0;
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
            .contact-title{
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
                font-size: .6rem;
            }
        }
        
    }
    `