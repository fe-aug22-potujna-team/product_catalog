import React from 'react'
import './Footer.scss'
import back from '../../images/icons/backtop.svg'
import logo from '../../images/icons/logo.svg'

export const Footer: React.FC = () => {
  return (
    <div className="footer__container">
      <section className="footer">
        <img src={logo} className="footer__logo" alt="logo" />
        <ul className="footer__nav">
          <li className="footer__link-item"><a href="/" className="footer__link">Github</a></li>
          <li className="footer__link-item"><a href="/" className="footer__link">Contacts</a></li>
          <li className="footer__link-item"><a href="/" className="footer__link">rights</a></li>
        </ul>
        <div className='footer__backtop'>
          <p className='footer__backtop-text'>Back to top</p>
          <a href='/product_catalog/' className='back-link'>
            <img src={back} alt='back top' className='footer__backtop-icon'></img>
          </a>
        </div>
      </section>
    </div>
  )
}
