import React from "react"
import MainButton from "./components/MainButton"
import MainCard from "./components/MainCard"
import MainText from "./components/MainText"
import MainTitle from "./components/MainTitle"

function App() {
  return (
    <div>
      <MainTitle text="Rosadev Solutions" />
      <MainText />

      <div>
        <MainCard
        divClassName="card card-01"
        imgClassName="cardImg img-01"
        imgAlt="Card Santander"
        imgSrc="https://ada-strapi-production.s3.sa-east-1.amazonaws.com/Thumbs_PS_5_0d3ff24ed0.png"
        titleClassName="cardTitle title-01"
        titleText="Santander Coders"
        subtitleClassName="cardSubtitle subtitle-01"
        subtitleText="Web + Dados + DevOps"
       />

       <MainCard
        divClassName="card card-02"
        imgClassName="cardImg img-02"
        imgAlt="Card B3"
        imgSrc="https://ada-strapi-production.s3.sa-east-1.amazonaws.com/Thumbs_PS_c72d21121d.png"
        titleClassName="cardTitle title-02"
        titleText="B3 Inclua"
        subtitleClassName="cardSubtitle subtitle-02"
        subtitleText="Back-End em Java"
       />

       <MainCard
        divClassName="card card-03"
        imgClassName="cardImg img-03"
        imgAlt="Card Cielo"
        imgSrc="https://ada-strapi-production.s3.sa-east-1.amazonaws.com/Thumb_PS_Cielo_4364bbe38b.png"
        titleClassName="cardTitle title-03"
        titleText="Cielo Bootcamp"
        subtitleClassName="cardSubtitle subtitle-03"
        subtitleText="Web"
       />

      </div>



      <MainButton cta="Primeiro" />
      <MainButton cta="Segundo"  />
      <MainButton cta="Terceiro" />
    </div>
  )
}

export default App
