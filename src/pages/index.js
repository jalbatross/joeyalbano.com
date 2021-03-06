/**
 * about.js
 * 
 * An About page
 *
 * Author: jalbatross (Joey Albano) Oct 15 2018
 * 
 */

import React from "react";
import { SocialIcon } from 'react-social-icons';
import { css } from 'emotion';
import GitHubCalendar from 'github-calendar';
import myPicture from './resources-about/me.jpg'

const AboutPicture = () => {
  const aboutPictureStyling = {
    //Centers the image
    display:'block',
    marginLeft: 'auto',
    marginRight: 'auto',

    //Circle border
    borderRadius: '50%',

    //Make it smaller!
    width:'25vh',
    height:'25vh'
  }
  return <img src={myPicture} style={aboutPictureStyling}/>
}

const AboutName = () => {
  const aboutNameStyling = {
    textAlign: 'center',
    fontSize: '7vmin',
    whiteSpace:'nowrap',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    paddingBottom:'2.25vmin'
  }
  return <div style={aboutNameStyling}>Joey Albano</div>
}

const AboutIcons = () => {

  const aboutIconContainerStyling = {
    textAlign: 'center',
    "& > *": {
      'margin': '1.5vmin',
      'width': '2vmax',
      height: '2vmax',
    }
  }
  return (
    <div className={css(aboutIconContainerStyling)}>
      <SocialIcon url="mailto:joeycalbano@gmail.com"/>
      <SocialIcon url="https://github.com/jalbatross"/>
      <SocialIcon url="https://linkedin.com/in/jalbatross"/>
      <SocialIcon url="https://twitter.com/joeyalbatross"/>
      <SocialIcon url="https://soundcloud.com/jcal69"/>
    </div>
  )
}

const AboutBio = () => {
  const bioContainerStyling = {
    margin:'0 auto',
    width:'100%'
  }

  const aboutBioStyling = {
    fontSize: '25px',
    fontFamily: 'Arial'
  }
  return (
    <div style={bioContainerStyling}>
      <p style={aboutBioStyling}>
      I'm currently a Data Analyst & Mathematics Instructor for 
      <a href="https://afficienta.com"> Afficient Academy</a>, an edutech startup
      that focuses on improving common core student education outcomes.
      <br/><br/>
      I usually make apps in <b>Javascript</b> using <b>React</b>, but I'm well-versed
      in <b>Python</b>, <b>Java</b>, and <b>C++</b>.
      <br/><br/>
      When I'm not coding, I'm usually playing <b>Magic: the Gathering</b>, <b><a href="https://www.speedrun.com/user/Jalby">Speedrunning</a></b>, 
      or <b>eating delicious food!</b>
      </p>
    </div>
  )
}

class About extends React.Component {
  constructor(props) {
    super(props);
    this.calendarRef = null;
  }

  componentDidMount() {
    GitHubCalendar(this.calendarRef, 'jalbatross', {global_stats: false, responsive: true});
  }

  renderGithubContributions = () => {
    const githubCalendarStyling = {
      textAlign: 'center',
      width: '100%',
      height:'100%',
      "& .contrib-legend": {
        display: 'none'
      },
      "& > * svg": {
        width:'100%',
      }
      
    }
    return (
      <div className={css(githubCalendarStyling)} ref={(e) => (this.calendarRef = e)}></div>
    )
  }

  render() {
    const containerStyling = {
      margin: '0 auto',
    }

    const GithubContributions = this.renderGithubContributions();
    return (
      <div className="about-page" style={containerStyling} >
        <AboutPicture/>
        <AboutName/>
        <AboutIcons/>
        <AboutBio/>
        {GithubContributions}
      </div>
    )
  }
}

export default About;
