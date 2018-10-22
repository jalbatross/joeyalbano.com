import React from 'react'
import HeaderLink from './HeaderLink'

const Header = () => (
  <div
    style={{
      marginBottom: '3rem',
      borderBottom: '2px solid #e6e6e6',
      display: 'block'
    }}
  >
    <div
      style={{
        width:'100%',
        height: '18px',
        padding: '1.45rem 1.0875rem',
        border: '1px solid black'
      }}
   >
     <h1 style={{ width: '100%',textAlign: 'center'}}>
      <HeaderLink linkLocation="/" title="About" style={{borderRight: "1px solid black"}}/>
      <HeaderLink linkLocation="/blog" title="Blog" style={{borderRight: "1px solid black", borderLeft: "1px solid black"}}/>
      <HeaderLink linkLocation="/portfolio" title="Portfolio" style={{borderRight: "1px solid black", borderLeft: "1px solid black"}}/>
      <HeaderLink linkLocation="/resume" title="Resume" style={{borderLeft: "1px solid black"}} />
      </h1>
    </div>
  </div>
);

export default Header
