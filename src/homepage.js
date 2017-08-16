import React from 'react';
import {Component} from 'react';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import {white} from 'material-ui/styles/colors';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Scrollchor from 'react-scrollchor';
import Sticky from 'react-sticky-el';
import Configs from './configs.json';
import * as styles from './styles/styles.js';

class Homepage extends Component{
  constructor(props){
    super(props);

    this.state = {
      openAboutPopover: false,
      aboutMenuAnchor: undefined
    };
  }

  render(){

    const IconMenuPageSelection = () => (
   <div>
     <IconMenu
       iconButtonElement={<IconButton><NavigationMenu /></IconButton>}
       anchorOrigin={{horizontal: 'right', vertical: 'top'}}
       targetOrigin={{horizontal: 'right', vertical: 'top'}}
     >
       <Scrollchor to='' style={styles.scrollNav}><MenuItem style={styles.iconMenuTextStyle}primaryText="Home" /></Scrollchor>
       <Scrollchor to='#personalLife' style={styles.scrollNav}><MenuItem style={styles.iconMenuTextStyle}primaryText="Personal" /></Scrollchor>
       <Scrollchor to='#professionalLife' style={styles.scrollNav}><MenuItem style={styles.iconMenuTextStyle}primaryText="Professional" /></Scrollchor>
       <Scrollchor to='#experience' style={styles.scrollNav}><MenuItem style={styles.iconMenuTextStyle}primaryText="Experience" /></Scrollchor>
       <Scrollchor to='#contact' style={styles.scrollNav}><MenuItem style={styles.iconMenuTextStyle}primaryText="Contact" /></Scrollchor>
     </IconMenu>
   </div>
 );

    return (
        <div id='topContainer' style={styles.mainContainer}>
          <Paper id='mainTitle' elevation={3} style={styles.landing}>
            <div style={styles.titleStyling}>
              <Scrollchor to='#personalLife' style={styles.scrollNav}><h1 style={styles.nameHeaderStyle}>{Configs.headers.title}</h1></Scrollchor>
            </div>
          </Paper>
          <Sticky stickyStyle={{zIndex: 110}}>
            <div id='appBar'>
              <AppBar style={styles.appBarStyle}
                titleStyle={styles.appBarTitleStyle}
                title={
                <Scrollchor to='#personalLife' style={styles.scrollNav}><div style={styles.appBarNameStyle}>{Configs.headers.appBar}</div></Scrollchor>
                }
                showMenuIconButton={false}
                iconElementRight={<IconMenuPageSelection />}
              />
          </div>
          </Sticky>
          <div id='personalLife' style={styles.personalLifeContainer}>
              <div style={styles.personalLifeElements}>
                 <h5 style={styles.contentHeaderStyle}>{Configs.headers.sectionHeaders.personalLife}</h5>
                 <div style={styles.personalDetailsContentStyle}>
                  <Paper zDepth={0} style={styles.personalDetailsStyle}>
                    <h3 style={styles.pHeaderStyle}>{Configs.headers.contentHeaders.personalDetails}</h3>
                    <div style={styles.personalDetailsTextStyle}>
                      {Configs.content.personalDetails.sectionOne}
                      <br/><br/>{Configs.content.personalDetails.sectionTwo}
                      <br/><br/>{Configs.content.personalDetails.sectionThree}
                    </div>
                  </Paper>
                  <Paper zDepth={2} style={styles.personalMeImage} />
                </div>
              </div>
          </div>
          <div id='professionalLife' style={styles.professionalLifeContainer}>
              <div style={styles.professionalLifeContents}>
                <h5 style={styles.contentHeaderStyle}>{Configs.headers.sectionHeaders.professionalLife}</h5>
                 <div id='iconsContainer' style={styles.professionalIconsContainer}>
                  <Paper zDepth={1} style={styles.professionalLifePaperStyle}>
                    {
                      Object.keys(Configs.paths.technologies).map((iconValues) =>
                        (
                          <Avatar key={iconValues} style={styles.avatarStyles} backgroundColor={white} size={59} src={Configs.paths.technologies[iconValues]}/>
                        )
                      )
                    }
                   </Paper>
                  <Paper zDepth={0} style={styles.professionalDetailsPaper}>
                    <div style={styles.professionalRolesStyle}>
                      <span><b>Name:</b> Pedro Sorto</span>
                      <Divider/>
                      <span><b>Company: </b>Digital Globe</span>
                      <Divider/>
                      <span><b>Role: </b>Software Developer</span>
                      <Divider/>
                      <div><b>Education: </b>BS Computer Engineerin, Virginia Tech</div>
                    </div>
                  </Paper>
                  <Paper zDepth={0} style={styles.professionalTextPaperStyle}>
                    <h3 style={styles.pHeaderStyle}>{Configs.headers.contentHeaders.professionalDetails}</h3>
                    <div style={styles.professionalTextStyle}>
                      {Configs.content.professionalDetails.sectionOne}
                    <br/><br/>
                      {Configs.content.professionalDetails.sectionTwo}
                    </div>
                  </Paper>
                </div>
              </div>
          </div>
          <div id='experience' style={styles.experienceContainer}>
              <div style={styles.experienceRolesContainer}>
                <div style={styles.experienceHeaderStyle}>
                  <h5 style={styles.contentHeaderStyle}>{Configs.headers.sectionHeaders.experience}</h5>
                </div>
                {
                  Object.keys(Configs.experiences).map((experience) =>
                    (
                      <div key={experience} style={styles.experiencesStyle}>
                        <div style={styles.experienceIconBorder}>
                          <Paper zDepth={0} style={styles.workExperienceImage}>
                            <a href={Configs.experiences[experience].url}  target = '_blank'>
                              <img style={{height:'85px'}} src={Configs.experiences[experience].image} />
                            </a>
                            <Divider/>
                            <div style={styles.experienceYearFormat}>{Configs.experiences[experience].year}</div>
                          </Paper>
                        </div>
                         <Paper zDepth={0} style={styles.experienceDetailsFormat}>
                           <h3>{Configs.experiences[experience].company}</h3>
                           <div style={styles.experienceTitleFormat}>
                            {Configs.experiences[experience].title}
                           </div>
                         </Paper>
                      </div>
                    )
                  )
                }
              </div>
          </div>
          <div id='contact' style={styles.contactContainer}>
            <div style={styles.contactIconContainer}>
              <div style={styles.contactHeader}>
                <h5 style={styles.contentHeaderStyle}>{Configs.headers.sectionHeaders.contactMe}</h5>
              </div>
              <Paper zDepth={0} style={{backgroundColor:'none'}}>
                <div style={styles.iconButtonContainer}>
                  <IconButton href={Configs.urls.github} target = '_blank' style={styles.urlIconButtons}> <img src={'src/img/github.svg'} height='48px'/> </IconButton>
                  <IconButton href={Configs.urls.linkedin} target = '_blank' style={styles.urlIconButtons}> <img src={'src/img/linkedin.svg'} height='48px'/> </IconButton>
                  <IconButton href={Configs.urls.gitlab} target = '_blank' style={styles.urlIconButtons}> <img src={'src/img/gitlab.svg'} height='48px'/> </IconButton>
                  <IconButton href={`mailto:${'pedro.sorto@outlook.com'}`} iconStyle={{width:'48px', height:'48px'}} style={styles.urlIconButtons}> <CommunicationEmail/> </IconButton>
                </div>
              </Paper>
            </div>
          </div>
        </div>
    );
  }
}

export default Homepage;
