import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './SocialIcons.css'
const socialMediaHandlesLinks = {
    gitHub: 'https://github.com/phanimurari',
    instagram: 'https://www.instagram.com/im_phani_murari/?hl=en',
    linkedin: 'https://www.linkedin.com/in/phanimurari/',
    twitter: 'https://twitter.com/ImPhaniMurari'
  }
const SocialIcons = () => {
  return (
    <div class="social-menu">
    <ul class="social-handle-list">
      <li className="social-handle-item">
        <SocialIcon url={socialMediaHandlesLinks.gitHub} />
      </li>

      <li className="social-handle-item">
        <SocialIcon url={socialMediaHandlesLinks.linkedin} />
      </li>

      <li className="social-handle-item">
        <SocialIcon url={socialMediaHandlesLinks.instagram} />
      </li>

      <li className="social-handle-item">
        <SocialIcon url={socialMediaHandlesLinks.twitter} />
      </li>
    </ul>
  </div>
  )
}

export default SocialIcons
