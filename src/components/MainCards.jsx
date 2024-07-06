import React from "react"
import MainCard from "./MainCard"

export default function MainCards(){
  return(
    <div className="flex justify-center items-center gap-[5rem]">
      <MainCard
        imgAlt="Card Santander"
        imgSrc="https://ada-strapi-production.s3.sa-east-1.amazonaws.com/Thumbs_PS_5_0d3ff24ed0.png"
        titleText="Santander Coders"
        subtitleText="Web + Dados + DevOps"
      />

      <MainCard
        imgAlt="Card B3"
        imgSrc="https://ada-strapi-production.s3.sa-east-1.amazonaws.com/Thumbs_PS_c72d21121d.png"
        titleText="B3 Inclua"
        subtitleText="Back-End em Java"
      />

      <MainCard
        imgAlt="Card Cielo"
        imgSrc="https://ada-strapi-production.s3.sa-east-1.amazonaws.com/Thumb_PS_Cielo_4364bbe38b.png"
        titleText="Cielo Bootcamp"
        subtitleText="Web"
      />
    </div>
  )
}
