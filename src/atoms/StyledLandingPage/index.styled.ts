import styled from 'styled-components'
import HeroBannerImg from '../../assets/heroBanner.png'
import EarnBanner from "../../assets/earnBanner.png"
import EarnBanner2 from "../../assets/earnBanner2.png"

 export const HeroSection = styled.div`
    background-color: #F7F7F7;
    .before{
        display: flex;
        background-color: #FDF1F3;
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
                }
                p{
                    color: #555555;
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
                        font-size: 3rem;
                    }
            }
        } 
        }
    }

`
 export const HeroBannerBackground = styled.div`
    width: 50%;
    height: 750px;
    .hb{
        margin-top: -50px;
        background-position: right;
        background-image: url(${HeroBannerImg});
        width: 100%;
        height: 800px;
        background-repeat: no-repeat;
        background-size: contain;
    }
    
`
 export const HeroCardSection = styled.div`
    width: 100%;
    padding: 2rem;
    background-color: #FAFAFA;

    .hc-section{
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 50px;
        width: 80%;
        margin: -250px auto 0;
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
        // width: 10rem;
        img{
            width: 50px;
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

`

 export const EarnSection = styled.div`
    background-color: #EEEEEE;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 0;
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
`

export const EarnSubSection = styled.div`
    background-color: #FAFAFA;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 4rem;
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
`
export const FAQSection = styled.div`
    background-color: #FDF1F3;
    padding: 7rem 4rem;
    .faq-title{
        text-align: center;
        font-size: 2.5rem;
        margin: 3rem auto;
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
            width: 95%;
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
`

export const InfoSection = styled.div`
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 7rem 4rem;
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
`
