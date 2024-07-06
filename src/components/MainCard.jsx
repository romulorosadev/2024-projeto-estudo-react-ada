import React from "react"

export default function MainCard(props){
  return(
    <div className={props.divClassName}>
      <div>
        <img
        className={props.imgClassName}
        alt={props.imgAlt}
        src={props.imgSrc} />
      </div>
      <h2 className={props.titleClassName}>{props.titleText}</h2>
      <p className={props.subtitleClassName}>{props.subtitleText}</p>
    </div>
  )
}
