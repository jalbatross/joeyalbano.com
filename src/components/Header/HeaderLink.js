import React from 'react';
import Link from 'gatsby-link';
import { css } from 'emotion';


const HeaderLink = (props) => {
  const headerTextStyle = {
      color: 'black',
      textDecoration: 'none',
      padding: '5px',
      '&:hover': {
        'background': '#ccc'
      },

      ...props.style //we put this last so that it gets priority in CSS!
    }

  return <Link to={props.linkLocation} className={css(headerTextStyle)}>{props.title}</Link>
}

export default HeaderLink
