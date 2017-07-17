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
import Image from 'material-ui-image';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

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
    backgroundColor: 'white',
  },
  appBarTitleStyle: {
    color: 'black'
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
    border: '2px solid',
    color:'black',
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
    height:'350px',
    width:'350px',
    backgroundImage: `url(${'src/img/personalPedro.JPG'})`,
    backgroundSize:'350px',
    marginLeft: '120px',
    marginRight: '120px',
  }
};

const imageData =
{
  img: 'http://i.imgur.com/ljVb9f3.jpg',
  title: 'Sample Image',
  author: 'Pedro Sorto'
};

const tilesData = [
  {
    img: 'src/img/IMG_5282.jpg',
    title: 'Breakfast',
    author: 'jill112',
    featured: true,
  },
  {
    img: 'src/img/2000px-Costco_Wholesale.svg.png',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'src/img/humangeo1.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'src/img/kanyelaugh.gif',
    title: 'Morning',
    author: 'fancycrave3',
    featured: true,
  },
  {
    img: 'src/img/kirkland-signature-brand-3.gif',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'src/img/pandapan.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'src/img/Pizza_Steve_Suit.png',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'src/img/spongegar.png',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

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
       <MenuItem primaryText="Home" />
       <MenuItem primaryText="About Me" />
       <MenuItem primaryText="Social Media" />
       <MenuItem primaryText="Contact" />
     </IconMenu>
   </div>
 );


    return (
    <div>
        <div style={styles.mainContainer}>
          <Paper elevation={3} style={styles.landing}>
            <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
              <h1 style={styles.nameHeaderStyle}>The Life of Pedro</h1>
            </div>
          </Paper>
            <div>
              <AppBar style={styles.appBarStyle}
                titleStyle={styles.appBarTitleStyle}
                title={'Pedro Sorto'}
                showMenuIconButton={false}
                iconElementRight={<IconMenuPageSelection />}
              />
          </div>
          <div className={'aboutMe'} style={{display:'flex', flexDirection:'row', justifyContent:'center', margin:'40px'}}>
              <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                <h5 style={styles.contentHeaderStyle}>Professional Life</h5>
                 <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                  <Paper zDepth={2} style={styles.aboutMeImage} />
                  <Paper zDepth={0} style={{height:'350px', width:'350px', marginLeft: '10px', marginRight: '10px', backgroundColor: '#efefef'}}>
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
                  <Paper zDepth={0} style={{height:'350px', width:'350px',  marginLeft: '10px', marginRight: '10px', backgroundColor: '#efefef'}}>
                    <h3>Professional Details</h3>
                    <div style={{display: 'flex', flexDirection:'column', fontSize: '13px', fontFamily: 'sans-serif', lineHeight:2,}}>
                    I am currently a software developer at Digital Globe. I have worked on several projects under various Department of Defense contractors.
                    My focus on these have been largely on front-end web develment with AngularJs and ReactJS, while utilizing backend services such as NGINX,
                    docker, Elasticsearch, and python saltstack.
                    <br/><br/>
                    Outside of work, I have enjoyed participating in Hackathons, Tech Meetups, and Tech Talks.
                    </div>
                  </Paper>
                </div>
              </div>
          </div>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'center', margin:'40px'}}>
              <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                <h5 style={styles.contentHeaderStyle}>Personal Life</h5>
                 <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                  <Paper zDepth={0} style={{height:'350px', width:'350px',  marginLeft: '120px', marginRight: '120px', backgroundColor: '#efefef'}}>
                    <h3>Personal Details</h3>
                    <div style={{display: 'flex', flexDirection:'column', fontSize: '13px', fontFamily: 'sans-serif', lineHeight:2,}}>
                    In my freetime, I enjoy biking and running! I recently traveled to the San Francisco Bay Area and all around Colorado on
                    a hiking, biking, and brewery journey.
                    <br/><br/>One of my favorite aspects of living in the city is the great number of live music
                    performances that I have access to. I'll be attending Lollapalooza for the first time which will also be my first time in
                    Chicago.
                    <br/><br/>When I'm not outside, I'm either binge watching some of my favorites shows on Netflix or playing online games with
                    my close friends.
                    </div>
                  </Paper>
                  <Paper zDepth={2} style={styles.personalMeImage} />
                </div>
              </div>
          </div>
          <div className={'workExperience'} style={{display:'flex', flexDirection:'row', justifyContent:'center', margin:'40px'}}>
              <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                <h5 style={styles.contentHeaderStyle}>Work Experience</h5>
              </div>
          </div>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'center', margin:'40px'}}>
            <Paper zDepth={0} style={{height:'400px', width:'500px', backgroundColor:'#efefef'}}>
              <h5 style={{fontFamily:'sans-serif',fontSize:'14px', fontWeight:100, lineHeight:2.5}}>Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos,
              qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet, consectetur, adipisci[ng]
              velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
              minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo
            voluptas nulla pariatur?</h5>

            </Paper>
            <Paper zDepth={1} style={{height:'400px', width:'500px', marginLeft:'60px'}}>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/react.svg"/>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/Tux.svg"/>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/Npm-logo.svg"/>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/docker.svg"/>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/AngularJS-Shield.svg"/>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/cpp_logo.svg"/>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/gitlogo.png"/>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/elasticsearch.svg"/>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/html5.svg"/>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/JIRA_logo.svg"/>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/jspm_io.svg"/>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/saltstack_logo.svg"/>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/webpack.svg"/>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/python.png"/>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/css3.png"/>
              <Avatar style={{marginLeft:'20px', marginRight: '8px'}} backgroundColor={white} size={95} src="src/img/aws.png"/>
            </Paper>
          </div>
        </div>
        <div style={styles.root}>
          <GridList
            cols={2}
            cellHeight={200}
            padding={15}
            style={styles.gridList}
          >
            {tilesData.map((tile) => (
              <GridTile
                key={tile.author}
                title={tile.title}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                actionPosition="left"
                titlePosition="top"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                cols={tile.featured ? 2 : 1}
                rows={tile.featured ? 2 : 1}
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

export default Homepage;
