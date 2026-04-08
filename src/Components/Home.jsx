import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const products = [
    {
      id: 1,
      name: 'Professional Drill Set',
      desc: 'High-torque precision drilling for industrial applications.',
      image: 'https://www.bosch-pt.co.in/in/media/country_content/specials/highlights/standard_line/o05-a_rolling-banner-for-standard-line_1920x768.jpg',
    },
    {
      id: 2,
      name: 'Angle Grinder Pro',
      desc: 'Heavy-duty cutting and grinding with ergonomic grip.',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
    },
    {
      id: 3,
      name: 'Precision Wrench Kit',
      desc: 'Complete set of torque-calibrated wrenches for every job.',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80',
    },
    {
      id: 4,
      name: 'Laser Measuring Tool',
      desc: 'Millimetre-accurate measurements up to 50 metres.',
      image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80',
    },
  ]

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif", color: '#1d1d1f' }}>

      {/* ═══════════ HERO ═══════════ */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '88vh',
          minHeight: '520px',
          overflow: 'hidden',
          background: '#000',
        }}
      >
        <img
          src="https://www.bosch-pt.co.in/in/media/country_content/specials/highlights/standard_line/o05-a_rolling-banner-for-standard-line_1920x768.jpg"
          alt="Engineering workshop"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.55,
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 24px',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              marginBottom: '18px',
            }}
          >
            Super Bright Engineering
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.78)',
              maxWidth: '560px',
              lineHeight: 1.5,
              marginBottom: '36px',
            }}
          >
            Precision tools and engineering solutions — trusted by professionals across India since 1999.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link
              to="/products"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: '#0071e3',
                color: '#fff',
                borderRadius: '980px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#0077ed')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0071e3')}
            >
              Browse Products
            </Link>

            <a
              href="#about"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: 'transparent',
                color: '#fff',
                borderRadius: '980px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.4)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.75)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>


      {/* ═══════════ ABOUT STRIP ═══════════ */}
      <section
        id="about"
        style={{
          background: '#f5f5f7',
          padding: '88px 24px',
        }}
      >
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: '#1d1d1f',
              lineHeight: 1.12,
              marginBottom: '18px',
            }}
          >
            Built on decades of trust.
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: '#6e6e73',
              maxWidth: '640px',
              margin: '0 auto 52px',
            }}
          >
            Super Bright Engineering Company has been a cornerstone of industrial innovation since 1999.
            We supply precision-engineered tools, equipment and solutions to manufacturing, construction
            and maintenance industries across India.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
              textAlign: 'center',
            }}
          >
            {[
              { num: '25+', label: 'Years' },
              { num: '10,000+', label: 'Products delivered' },
              { num: '500+', label: 'Enterprise clients' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '2.6rem', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.03em' }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '14px', color: '#86868b', marginTop: '4px', fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════ FEATURED PRODUCTS ═══════════ */}
      <section style={{ background: '#fff', padding: '88px 24px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: '#1d1d1f',
              textAlign: 'center',
              marginBottom: '10px',
            }}
          >
            Featured products.
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#86868b',
              textAlign: 'center',
              marginBottom: '52px',
            }}
          >
            From hand tools to heavy machinery — engineered for excellence.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {products.map((p) => (
              <Link
                to="/products"
                key={p.id}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  background: '#f5f5f7',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 14px 40px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden', background: '#e8e8ed' }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    onError={e => {
                      e.target.src = `https://placehold.co/600x400/E8E8ED/6E6E73?text=${encodeURIComponent(p.name)}`
                    }}
                  />
                </div>
                <div style={{ padding: '20px 22px 24px' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '6px' }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: '13px', lineHeight: 1.55, color: '#6e6e73', marginBottom: '12px' }}>
                    {p.desc}
                  </p>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: '#0071e3' }}>
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              to="/products"
              style={{
                display: 'inline-block',
                padding: '14px 36px',
                background: '#0071e3',
                color: '#fff',
                borderRadius: '980px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#0077ed')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0071e3')}
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>


      {/* ═══════════ FOOTER ═══════════ */}
      <footer
        style={{
          background: '#f5f5f7',
          borderTop: '1px solid #d2d2d7',
        }}
      >
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '56px 24px 28px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
              marginBottom: '48px',
            }}
          >
            {/* Brand */}
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1d1d1f', marginBottom: '12px' }}>
                Super Bright Engineering
              </h3>
              <p style={{ fontSize: '13px', color: '#6e6e73', lineHeight: 1.65 }}>
                Trusted by industries across India for precision tools and engineering solutions since 1999.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                Quick Links
              </h4>
              {[
                { label: 'Home', to: '/' },
                { label: 'Products', to: '/products' },
                { label: 'Applications', to: '/applications' },
                { label: 'About Us', to: '/about' },
                { label: 'Contact Us', to: '/contact' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    color: '#6e6e73',
                    marginBottom: '9px',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#0071e3')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6e6e73')}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Product Categories */}
            <div>
              <h4
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                Products
              </h4>
              {['Power Tools', 'Hand Tools', 'Safety Equipment', 'Industrial Machinery', 'Measuring Instruments'].map(
                (item) => (
                  <Link
                    key={item}
                    to="/products"
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      color: '#6e6e73',
                      marginBottom: '9px',
                      textDecoration: 'none',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#0071e3')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6e6e73')}
                  >
                    {item}
                  </Link>
                )
              )}
            </div>

            {/* Location & Contact */}
            <div>
              <h4
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                Our Location
              </h4>
              <div style={{ fontSize: '13px', color: '#6e6e73', lineHeight: 1.8 }}>
                <p>Plot No. 42, Industrial Area</p>
                <p>Siliguri, West Bengal – 734001</p>
                <p style={{ marginBottom: '12px' }}>India</p>
                <p>Phone: +91 78094 89043</p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:info@superbright.in"
                    style={{ color: '#0071e3', textDecoration: 'none' }}
                  >
                    info@superbright.in
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: '1px solid #d2d2d7',
              paddingTop: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <p style={{ fontSize: '12px', color: '#86868b' }}>
              © {new Date().getFullYear()} Super Bright Engineering Company. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: '12px',
                    color: '#86868b',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#0071e3')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#86868b')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home