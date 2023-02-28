import SocialIcons from '@/components/SocialIcons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{backgroundImage: 'url("/map.png")'}} className='footer'>
      <Row className='row-footer'>
          <Col className='mb-5' sm={12} lg={4}>
            <div className="brand">
              <Link href="/" className="icon">
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  quality={100}
                />
              </Link>
              <SocialIcons />
            </div>
          </Col>
          <Col className='mb-5' sm={6} md={12} lg={4}>

          <ul className="nav-links">
            
            <li >
              <Link href="/" >Home</Link>
            </li>
            <li>
              <Link href="/about" >About</Link>
            </li>
            <li>
              <Link href="/services" >Services</Link>
              </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <p>0494875757</p>
            </li>
          </ul>
          
          
          </Col>
          <Col className='mb-5' sm={6} md={12} lg={4}>
            <div className='map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3455.8375027154225!2d31.31748099152631!3d29.984099657756257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35b0bda415fdbe15!2sCarrefour%20-%20Maadi%20City%20Center!5e0!3m2!1sen!2seg!4v1672652261910!5m2!1sen!2seg" width={'100%'} height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Col>
        </Row>
    </footer>
  )
}

export default Footer