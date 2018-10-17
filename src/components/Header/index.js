import React from 'react'
import HeaderLink from './HeaderLink'

const Header = () => (
  <div
    style={{
      background: '#f5f5f5',
      marginBottom: '3rem',
      borderBottom: '2px solid #e6e6e6',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: '500px',
        height: '18px',
        padding: '1.45rem 1.0875rem',
        border: '1px solid black'
      }}
   >
     <h1 style={{ textAlign: 'center',fontSize: '18px'}}>
      <HeaderLink linkLocation="/about" title="About" style={{borderRight: "1px solid black"}}/>
      <HeaderLink linkLocation="/blog" title="Blog" style={{borderRight: "1px solid black", borderLeft: "1px solid black"}}/>
      <HeaderLink linkLocation="/portfolio" title="Portfolio" style={{borderRight: "1px solid black", borderLeft: "1px solid black"}}/>
      <HeaderLink linkLocation="/resume" title="Resume" style={{borderLeft: "1px solid black"}} />
      </h1>
    </div>
  </div>
);

export default Header
