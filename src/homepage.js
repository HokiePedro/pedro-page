

import React from 'react';
import {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar'
import Popover from 'material-ui/Popover'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500, white, cyan500, black} from 'material-ui/styles/colors';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import Image from 'material-ui-image';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Scrollchor from 'react-scrollchor';
import Sticky from 'react-sticky-el';
import ActionGrade from 'material-ui/svg-icons/action/grade';

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  rightElementStyling:{
    marginTop: '10px'
  },
  GridStyle:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  appBarStyle: {
    backgroundColor: 'white'
  },
  nameHeaderStyle:{
    fontSize:'65px',
    zIndex: 100,
    marginTop: '250px',
    fontFamily: 'sans-serif',
    fontWeight: 400,
    border: '2px solid',
    color:'white',
    padding:10
  },
  contentHeaderStyle:{
    fontSize:'18px',
    zIndex: 100,
    fontFamily: 'sans-serif',
    border: '1.35px solid',
    fontWeight: 100,
    padding:10
  },
  landing: {
    padding: 25,
    position: 'relative', // For the boxShadow
    backgroundImage: `url(${'http://i.imgur.com/zfDtgcq.jpg'})`,
    backgroundColor: '#D3CAC5',
    backgroundPosition: '22% 70%',
    backgroundSize: 'cover',
    height: 1000,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '75%',
    padding: '15px'
  },
  aboutMeImage:{
    height:'350px',
    width:'350px',
    backgroundImage: `url(${'src/img/PedroSorto.jpg'})`,
    backgroundSize:'350px',
    margin: '20px'
  },
  personalMeImage:{
    height:'345px',
    width:'350px',
    backgroundImage: `url(${'src/img/personalPedro.JPG'})`,
    backgroundSize:'350px',
    marginLeft: '120px',
    marginRight: '120px',
  },
  workExperienceImage:{
      height:'58px',
      width:'260px',
      backgroundSize:'350px',
      marginRight: '20px'
  },
  scrollNav:{
    textDecoration: 'none'
  },
  pHeaderStyle: {
    fontWeight: 400
  }
};


const imageData =
{
  img: 'http://i.imgur.com/ljVb9f3.jpg',
  title: 'Sample Image',
  author: 'Pedro Sorto'
};

class Homepage extends Component{
  constructor(props){
    super(props);

    this.state = {
      openAboutPopover: false,
      aboutMenuAnchor: undefined
    };

    this.toggleOpenAbout = this.toggleOpenAbout.bind(this);
  }

  toggleOpenAbout(event){
    console.log('event');
    let toggleOpen = false;
    if(this.state.openAboutPopover){
      toggleOpen = false;
    }
    else{
      toggleOpen = true;
    }
    this.setState({
      openAboutPopover: toggleOpen,
      aboutMenuAnchor: event.currentTarget
    })
  }

  render(){

    const IconMenuPageSelection = () => (
   <div>
     <IconMenu
       iconButtonElement={<IconButton><NavigationMenu /></IconButton>}
       anchorOrigin={{horizontal: 'right', vertical: 'top'}}
       targetOrigin={{horizontal: 'right', vertical: 'top'}}
     >
       <Scrollchor to='' style={styles.scrollNav}><MenuItem primaryText="Home" /></Scrollchor>
       <Scrollchor to='#personalLife' style={styles.scrollNav}><MenuItem primaryText="Personal" /></Scrollchor>
       <Scrollchor to='#professionalLife' style={styles.scrollNav}><MenuItem primaryText="Professional" /></Scrollchor>
       <Scrollchor to='#experience' style={styles.scrollNav}><MenuItem primaryText="Experience" /></Scrollchor>
       <Scrollchor to='#contact' style={styles.scrollNav}><MenuItem primaryText="Contact" /></Scrollchor>
     </IconMenu>
   </div>
 );


    return (
    <div>
        <div style={styles.mainContainer}>
          <Paper elevation={3} style={styles.landing}>
            <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
              <Scrollchor to='#personalLife' style={styles.scrollNav}><h1 style={styles.nameHeaderStyle}>The Life of Pedro</h1></Scrollchor>
            </div>
          </Paper>
          <Sticky stickyStyle={{zIndex: 110}}>
            <div>
              <AppBar style={styles.appBarStyle}
                titleStyle={styles.appBarTitleStyle}
                title={
                <Scrollchor to='#personalLife' style={styles.scrollNav}><div style={{color: '#535353', fontWeight: 100, width: '10%', paddingLeft: '10px'}}>Pedro Sorto</div></Scrollchor>
                }
                showMenuIconButton={false}
                iconElementRight={<IconMenuPageSelection />}
              />
          </div>
          </Sticky>
          <div id='personalLife' style={{display:'flex', flexDirection:'row', justifyContent:'center', margin:'20px 40px 160px 40px', paddingTop:120}}>
              <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                <h5 style={styles.contentHeaderStyle}>Personal Life</h5>
                 <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                  <Paper zDepth={0} style={{height:'350px', width:'350px',  marginLeft: '120px', marginRight: '120px', fontWeight: 100}}>
                    <h3 style={styles.pHeaderStyle}>Personal Details</h3>
                    <div style={{display: 'flex', flexDirection:'column', fontSize: '13px', fontFamily: 'sans-serif', lineHeight:2,}}>
                    In my freetime, I enjoy biking and running. I recently traveled to the San Francisco Bay Area and all around Colorado on
                    a hiking, biking, and brewery journey.
                    <br/><br/>One of my favorite aspects of living in the city is the great number of live music
                    performances that I have access to. From small concert venues to large music festivals, I'm always down for a show whether it's a favorite artist or someone new.
                    <br/><br/>When I'm not outside, I'm either binge watching some of my favorites shows on Netflix or playing online games with
                    my close friends.
                    </div>
                  </Paper>
                  <Paper zDepth={2} style={styles.personalMeImage} />
                </div>
              </div>
          </div>
          <div id='professionalLife' style={{display:'flex', flexDirection:'row', justifyContent:'space-around', margin:'40px 40px 160px 40px', paddingTop:120}}>
              <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                <h5 style={styles.contentHeaderStyle}>Professional Life</h5>
                 <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap'}}>
                   <Paper zDepth={1} style={{height:'350px', width:'350px'}}>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/react.svg"/>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/Tux.svg"/>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/Npm-logo.svg"/>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/docker.svg"/>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/AngularJS-Shield.svg"/>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/cpp_logo.svg"/>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/gitlogo.png"/>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/elasticsearch.svg"/>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/html5.svg"/>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/JIRA_logo.svg"/>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/jspm_io.svg"/>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/saltstack_logo.svg"/>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/webpack.svg"/>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/python.png"/>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/css3.png"/>
                     <Avatar style={{margin:'13px', borderRadius:'5%'}} backgroundColor={white} size={59} src="src/img/aws.png"/>
                   </Paper>
                  <Paper zDepth={0} style={{height:'350px', width:'350px', marginLeft: '40px', marginRight: '40px'}}>
                    <div style={{display: 'flex', flexDirection:'column', fontSize: '14px', fontFamily: 'sans-serif', lineHeight:4,}}>
                      <span><b>Name:</b> Pedro Sorto</span>
                      <Divider/>
                      <span><b>Company: </b>Digital Globe</span>
                      <Divider/>
                      <span><b>Role: </b>Software Developer</span>
                      <Divider/>
                      <div><b>Education: </b>BS Computer Engineerin, Virginia Tech</div>
                    </div>
                  </Paper>
                  <Paper zDepth={0} style={{height:'350px', width:'350px',  marginLeft: '10px', marginRight: '10px', fontWeight: 100}}>
                    <h3 style={styles.pHeaderStyle}>Professional Details</h3>
                    <div style={{display: 'flex', flexDirection:'column', fontSize: '13px', fontFamily: 'sans-serif', lineHeight:2,}}>
                    I am currently a software developer at Digital Globe. I have worked on several projects for various Department of Defense contracts.
                    My focus on these projects has been largely on front-end web development with AngularJs and ReactJS, while utilizing backend services such as NGINX,
                    docker, Elasticsearch, and python SaltStack.
                    <br/><br/>
                    Outside of work, I have enjoyed participating in Hackathons, Tech Meetups, and Tech Talks.
                    </div>
                  </Paper>
                </div>
              </div>
          </div>
          <div id='experience' style={{display:'flex', flexDirection:'row', justifyContent:'center', margin:'40px', paddingTop: 120}}>
              <div style={{width: '100%', display: 'flex', flexDirection:'column'}}>
                <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                  <h5 style={styles.contentHeaderStyle}>Work Experience and Education</h5>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', marginBottom: '50px', marginLeft: '110px'}}>
                  <div style={{borderRight: '1px solid #e0e0e0'}}>
                    <Paper zDepth={0} style={styles.workExperienceImage}><img style={{height:'85px'}} src={'src/img/digitalglobe.png'} />
                      <Divider/>
                      <div style={{display:'flex', justifyContent:'flex-end',fontWeight:100, paddingTop:'5px'}}>2015 - Current</div>
                    </Paper>
                  </div>
                   <Paper zDepth={0} style={{height:'150px', width:'350px', marginLeft: '30px'}}>
                     <h3>Digital Globe | HumanGeo</h3>
                     <div style={{display: 'flex', flexDirection:'column', fontSize: '13px', fontFamily: 'sans-serif', lineHeight:2}}>
                      Software Developer
                     </div>
                   </Paper>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', marginBottom: '50px', marginLeft: '110px'}}>
                  <div style={{borderRight: '1px solid #e0e0e0'}}>
                    <Paper zDepth={0} style={styles.workExperienceImage}><img style={{height:'85px'}} src={'src/img/altamira.png'} />
                      <Divider/>
                      <div style={{display:'flex', justifyContent:'flex-end', fontWeight:100, paddingTop:'5px'}}>2012 - 2014</div>
                    </Paper>
                  </div>
                   <Paper zDepth={0} style={{height:'150px', width:'350px', marginLeft: '30px'}}>
                     <h3>Altamira | Invertix</h3>
                     <div style={{display: 'flex', flexDirection:'column', fontSize: '13px', fontFamily: 'sans-serif', lineHeight:2}}>
                       Junior Developer, Internship
                     </div>
                   </Paper>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', marginBottom: '50px', marginLeft: '110px'}}>
                  <div style={{borderRight: '1px solid #e0e0e0'}}>
                    <Paper zDepth={0} style={styles.workExperienceImage}><img style={{height:'85px'}} src={'src/img/vt-logo.png'} />
                      <Divider/>
                      <div style={{display:'flex', justifyContent:'flex-end',fontWeight:100, paddingTop:'5px'}}>2010 - 2015</div>
                    </Paper>
                  </div>
                   <Paper zDepth={0} style={{height:'150px', width:'350px', marginLeft: '30px'}}>
                     <h3>Virginia Tech</h3>
                     <div style={{display: 'flex', flexDirection:'column', fontSize: '13px', fontFamily: 'sans-serif', lineHeight:2}}>
                       Computer Engineering, Bachelor of Science
                     </div>
                   </Paper>
                </div>
              </div>
          </div>
          <div id='contact' style={{display:'flex', flexDirection:'row', justifyContent:'center', paddingTop: 120, backgroundColor: '#efefef'}}>
            <div style={{width: '100%', display: 'flex', flexDirection:'column', backgroundColor:'none'}}>
              <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                <h5 style={styles.contentHeaderStyle}>Contact Me</h5>
              </div>
              <Paper zDepth={0} style={{backgroundColor:'none'}}>
                <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', marginTop: '80px', marginBottom: '440px'}}>
                  <IconButton href={'https://github.com/HokiePedro'} target = '_blank' style={{padding: 0, margin: '5px'}}> <img src={'src/img/github.svg'} height='48px'/> </IconButton>
                  <IconButton href={'https://www.linkedin.com/in/psorto/'} target = '_blank' style={{padding: 0, margin: '5px'}}> <img src={'src/img/linkedin.svg'} height='48px'/> </IconButton>
                  <IconButton href={'https://gitlab.com/hokiepedro'} target = '_blank' style={{padding: 0, margin: '5px'}}> <img src={'src/img/gitlab.svg'} height='48px'/> </IconButton>
                  <IconButton href={`mailto:${'pedro.sorto@outlook.com'}`} iconStyle={{width:'48px', height:'48px'}} style={{padding: 0, margin: '5px'}}> <CommunicationEmail/> </IconButton>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
