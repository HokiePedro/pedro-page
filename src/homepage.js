import React from 'react';
import {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar'
import Popover from 'material-ui/Popover'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500, white, cyan500, black} from 'material-ui/styles/colors';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Image from 'material-ui-image'

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
    flexDirection: 'column',
    alignItems: 'center'
  },
  appBarStyle: {
    backgroundColor: 'white',
  },
  appBarTitleStyle: {
    color: 'black'
  },
  nameHeaderStyle:{
    fontSize:'30px',
    zIndex: 100,
    marginBottom: '-58px',
    fontFamily: 'sans-serif',
    fontWeight: 400,
    borderBottom: '2px solid',
    color:'white'
  }
};

const imageData =
{
  img: 'http://www.masseyspizza.com/wp-content/uploads/2016/03/Pep-Pizza.jpg',
  title: 'Pizza',
  author: 'Papa John'
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
       <MenuItem primaryText="Home" />
       <MenuItem primaryText="About Me" />
       <MenuItem primaryText="Social Media" />
       <MenuItem primaryText="Contact" />
     </IconMenu>
   </div>
 );

    return (
      <div style={styles.mainContainer}>
          <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
            <h1 style={styles.nameHeaderStyle}>The Life of Pedro</h1>
            <Image style={{width:'100%', height:'100%'}} src={'http://i.imgur.com/zfDtgcq.jpg'} />
          </div>
          <div>
            <AppBar style={styles.appBarStyle}
              titleStyle={styles.appBarTitleStyle}
              title={'Sortophoto'}
              showMenuIconButton={false}
              iconElementRight={<IconMenuPageSelection />}
            />
          </div>
          <GridList
            cellHeight={180}
            style={styles.GridStyle}>
          <Subheader>Photos</Subheader>
            <div style={styles.mainContainer}>
              <GridTile
                style={{height: '420px', margin: '15px'}}
                key={imageData.img}
                title={imageData.title}
                subtitle={<span>by <b>{imageData.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
                <img src={imageData.img} />
              </GridTile>
              <GridTile
                style={{height: '420px', margin: '15px'}}
                key={'1'}
                title={imageData.title}
                subtitle={<span>by <b>{imageData.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
                <img src={imageData.img} />
              </GridTile>
              <GridTile
                style={{height: '420px', margin: '15px'}}
                key={'2'}
                title={imageData.title}
                subtitle={<span>by <b>{imageData.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
                <img src={imageData.img} />
              </GridTile>
              <GridTile
                style={{height: '420px', margin: '15px'}}
                key={'3'}
                title={imageData.title}
                subtitle={<span>by <b>{imageData.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
                <img src={imageData.img} />
              </GridTile>
            </div>
          </GridList>
      </div>
    );
  }
}

export default Homepage;
