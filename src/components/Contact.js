import React from "react"
import PhoneIcon from "../images/icons/smartphone.svg"
import MailIcon from "../images/icons/mail-multiple.svg"

const Contact = () => {
  return (
    <div className="section light contact" id="contact">
      <div className="contact-info">
        <MailIcon className="icon" alt="envelopes" />
        anna.b.scislowska@gmail.com
      </div>
      <div className="contact-info" alt="smartphone">
        <PhoneIcon className="icon" />
        790-291-827
      </div>
    </div>
  )
}

export default Contact
