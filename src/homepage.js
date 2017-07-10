import React from 'react';
import {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar'
import Popover from 'material-ui/Popover'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500, white, cyan500, black} from 'material-ui/styles/colors';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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

    const IconMenuExampleSimple = () => (
   <div>
     <IconMenu
       iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
       anchorOrigin={{horizontal: 'left', vertical: 'top'}}
       targetOrigin={{horizontal: 'left', vertical: 'top'}}
     >
       <MenuItem primaryText="Refresh" />
       <MenuItem primaryText="Send feedback" />
       <MenuItem primaryText="Settings" />
       <MenuItem primaryText="Help" />
       <MenuItem primaryText="Sign out" />
     </IconMenu>
   </div>
 );


    const rightIcon = () => (
    <div>
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon color={black}/> </IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Send feedback" />
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
   </div>
    );

    const Logged = (props) => (
      <IconButton onTouchTap={this.toggleOpenAbout}><MoreVertIcon color={black}/> </IconButton>
    );



    const aboutPopover = (
      <Popover
        open={this.state.openAboutPopover}
        anchorEl={this.state.aboutMenuAnchor}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      />
    );

    return (
      <div style={styles.mainContainer}>
        {aboutPopover}
        <div>
          <AppBar style={styles.appBarStyle}
            titleStyle={styles.appBarTitleStyle}
            title={'Sortophoto'}
            showMenuIconButton={false}
            iconElementRight={<IconMenuExampleSimple />}

          />
        </div>
          
      </div>
    );
  }
}

export default Homepage;
