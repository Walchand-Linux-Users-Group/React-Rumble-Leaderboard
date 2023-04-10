// Footer which includes social links and a info box

import React from 'react'
import './Footer.css'
import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <div>
      {/* <section className="guide">

            <h3>Guide</h3>
            <p>1. The game will start at 17:00 on 29th January 2023.</p>
            <p>2. The game will end at 17:00 on 30th January 2023.</p>
            <p>3. The game will be played on the MetaMorphosis Discord server.</p>

        </section> */}

      <div className='footer'>
        <div className='footer-about'>
          <h3>Metamorphosis 2k23</h3>
          <p>Be ready to disrupt your status quo!</p>
        </div>

        {/* Bottom Section */}
        <div className='footer-bottom--section'>
          <hr />

          <div className='container grid grid-two-cloumn'>
            <p>&copy; @{new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </div>
        <div className='footer-social'>
          <h3>Follow us</h3>
          {/* <div className="footer-social--icons">

             
              <div>
                <a href="#" target="_blank">
                  <FaDiscord className="icon" color="black" style={{fontSize:30}}/>
                </a>
              </div>

              <div>
                <a href="#" target="_blank">
                  <FaInstagram className="icon" color="black" style={{fontSize:30}}/>
                </a>
              </div>

  
              <div>
                <a href="#" target="_blank">
                  <FaLinkedin className="icon" color="black" style={{fontSize:30}}/>
                </a>
              </div>

       
              <div>
                <a href="#" target="_blank">
                  <FaTwitter className="icon" color="black" style={{fontSize:30}}/>
                </a>
              </div>

              </div> */}
          <SocialIcons />
        </div>
      </div>
    </div>
  )
}

// const Wrapper = styled.section`
//   .guide {
//     max-width: 60vw;
//     margin: auto;
//     padding: 5rem 10rem;
//     background-color: ${({ theme }) => theme.colors.bg};
//     border-radius: 1rem;
//     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
//     transform: translateY(50%);
//   }

//   .guide h3 {
//     font-size: 2rem;
//     font-weight: 700;
//     margin-bottom: 2rem;
//   }

//   .guide p {
//     font-size: 1.5rem;
//     font-weight: 400;
//     margin-bottom: 1rem;
//   }

//   .footer {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 5rem 10rem;
//     background-color: ${({ theme }) => theme.colors.bg};
//     border-radius: 1rem;
//     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
//     transform: translateY(50%);
//   }

//   .footer-about {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }

//   .footer-about h3 {
//     font-size: 2rem;
//     font-weight: 700;
//     margin-bottom: 2rem;
//   }

//   .footer-about p {
//     font-size: 1.5rem;
//     font-weight: 400;
//     margin-bottom: 1rem;
//   }

//   .footer-social {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }

//   .footer-social h3 {
//     font-size: 2rem;
//     font-weight: 700;
//     margin-bottom: 2rem;
//   }

//   .footer-social--icons {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 20rem;
//   }

//   .icon {
//     font-size: 2rem;
//     color: ${({ theme }) => theme.colors.primary};
//     position: relative;
//     cursor: pointer;
//   }

//   .icon:hover {
//     color: ${({ theme }) => theme.colors.secondary};
//   }

//   .footer-bottom--section {
//     padding-top: 9rem;
//     hr {
//       margin-bottom: 2rem;
//       color: ${({ theme }) => theme.colors.hr};
//       height: 0.1px;
//     }
//   }

//   @media (max-width: 768px) {
//     .guide {
//       padding: 5rem 5rem;
//     }

//     .footer {
//       padding: 5rem 5rem;
//     }

//     .footer-social--icons {
//       width: 15rem;
//     }

//     .icon {
//       font-size: 1.5rem;
//     }

//   }
// `;

export default Footer
