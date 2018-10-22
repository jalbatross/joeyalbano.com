import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Media from 'react-media'
import './index.css'
import "../styles/layout-override.css";

require("prismjs/themes/prism-tomorrow.css");

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Joey Albano"
      meta={[
        { name: "description", content: "Joey Albano's Webpage" },
        { name: "keywords", content: "Joey Albano, HTML, React, Javascript, Programming" },
        { name: 'author', content: 'Joey Albano'},
        {name:  'viewport', content: 'width=device-width, initial-scale=1.0'}
      ]}
    />
    <Header />
    <div
      style={{
        maxWidth: '980px',
        margin: '0 auto',
        display: "block",
        height: "100%"
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: "0 auto",
                maxWidth: '900px',
                display:'block',
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ display: 'block'}}>{children()}</div>
            </div>
          ) : (
            <div
              style={{
                margin: "0 auto",
                maxWidth: '900px',
                display:'block',
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ display:'block' }}>
                {children()}
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
