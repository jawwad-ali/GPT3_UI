import React from 'react'
import "./brand.css"
import google from "../../assets/google.png"
import dropbox from "../../assets/dropbox.png" 
import shopify from "../../assets/shopify.png"
import slack from "../../assets/slack.png"
import atlassian from "../../assets/atlassian.png"

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google" />
        <img src={dropbox} alt="dropbox" />
        <img src={slack} alt="slack" /> 
        <img src={atlassian} alt="atlassian" />
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand