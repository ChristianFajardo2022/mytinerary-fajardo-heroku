import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import Lfacebook from '../img/facebook.png'
import Lyoutube from '../img/youtube.png'
import Linstagram from '../img/instagram.png'
import Llinkedin from '../img/linkedin.png'
import Lgithub from '../img/github.png'
import Ltwitter from '../img/gorjeo.png'
import Logo from '../img/Logotipo.png'

export default function Footer() {
  return (
    <MDBFooter bgColor='none' style={{ backgroundColor: 'black' }} className='text-center text-lg-start text-muted zIndex-tooltip'>
      <section style={{ color: 'white' }} className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://es-la.facebook.com/login/device-based/regular/login/' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'><img src={Lfacebook} alt="Logo" width={40} /></i>
          </a>
          <a href='https://twitter.com/?lang=es' className='me-4 text-reset'>
            <i className='fab fa-twitter'><img src={Ltwitter} alt="Logo" width={40} /></i>
          </a>
          <a href='https://www.youtube.com/' className='me-4 text-reset'>
            <i className='fab fa-google'><img src={Lyoutube} alt="Logo" width={40} /></i>
          </a>
          <a href='https://www.instagram.com/?hl=es' className='me-4 text-reset'>
            <i className='fab fa-instagram'><img src={Linstagram} alt="Logo" width={40} /></i>
          </a>
          <a href='https://co.linkedin.com/' className='me-4 text-reset'>
            <i className='fab fa-linkedin'><img src={Llinkedin} alt="Logo" width={40} /></i>
          </a>
          <a href='https://github.com/' className='me-4 text-reset'>
            <i className='fab fa-github'><img src={Lgithub} alt="Logo" width={40} /></i>
          </a>
        </div>
      </section>

      <section style={{ color: 'white' }} className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>MyTinerary
              </h6>
              <p>
                "Find your perfect trip,
                designed by insiders who know and love their cities!"
              </p>
              <img src={Logo} alt="Logo" width={200} />
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>most popular destinations</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Colombia
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Bogotá
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Soacha
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Medellin
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  flights
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> New York, NY 10012, US
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                management@mytinerary.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 01 234 567 88
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ color: 'white' }} className='text-center p-4' >
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          @ Christian Fajardo
        </a>
      </div>
    </MDBFooter>
  );
}