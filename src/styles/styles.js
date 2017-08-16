const mainContainer = {
  display: 'flex',
  flexDirection: 'column'
}
const rightElementStyling = {
  marginTop: '10px'
}
const GridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
}
const appBarStyle = {
  backgroundColor: 'white'
}
const nameHeaderStyle ={
  fontSize:'65px',
  zIndex: 100,
  marginTop: '250px',
  fontFamily: 'sans-serif',
  fontWeight: 400,
  border: '2px solid',
  color:'white',
  padding:10
}
const contentHeaderStyle ={
  fontSize:'18px',
  zIndex: 100,
  fontFamily: 'sans-serif',
  border: '1.35px solid',
  fontWeight: 100,
  padding:10
}
const landing = {
  padding: 25,
  position: 'relative', // For the boxShadow
  backgroundImage: `url(${'http://i.imgur.com/zfDtgcq.jpg'})`,
  backgroundColor: '#D3CAC5',
  backgroundPosition: '22% 70%',
  backgroundSize: 'cover',
  height: 1000,
  width: '100%'
}
const root = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
}
const gridList = {
  width: '75%',
  padding: '15px'
}
const aboutMeImage ={
  height:'350px',
  width:'350px',
  backgroundImage: `url(${'src/img/PedroSorto.jpg'})`,
  backgroundSize:'350px',
  margin: '20px'
}
const personalMeImage ={
  height:'345px',
  width:'350px',
  backgroundImage: `url(${'src/img/personalPedro.JPG'})`,
  backgroundSize:'350px',
  marginLeft: '120px',
  marginRight: '120px',
}
const workExperienceImage ={
    height:'58px',
    width:'260px',
    backgroundSize:'350px',
    marginRight: '20px'
}
const scrollNav ={
  textDecoration: 'none'
}
const pHeaderStyle = {
  fontWeight: 400
}
const urlIconButtons ={
  padding: 0,
  margin: '5px'
}
const avatarStyles = {
  margin:'13px',
  borderRadius:'5%'
}
const appBarNameStyle = {
  color: '#535353',
  fontWeight: 100,
  width: '10%',
  paddingLeft: '10px'
}
const personalLifeContainer = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  margin:'20px 40px 160px 40px',
  paddingTop:120
}
const titleStyling = {
  display: 'flex',
  flexDirection:'column',
  alignItems:'center'
}
const personalLifeElements = {
  display: 'flex',
  flexDirection:'column',
  alignItems:'center'
}
const personalDetailsStyle = {
  height:'350px',
  width:'350px',
  marginLeft: '120px',
  marginRight: '120px',
  fontWeight: 100
}
const personalDetailsTextStyle = {
  display: 'flex',
  flexDirection:'column',
  fontSize: '13px',
  fontFamily: 'sans-serif',
  lineHeight: 2
}
const personalDetailsContentStyle = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-around',
  flexWrap: 'wrap'
}
const professionalLifeContainer = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  margin:'20px 40px 160px 40px',
  paddingTop:120,
  justifyContent:'space-around',
}
const professionalLifeContents = {
  display: 'flex',
  flexDirection:'column',
  alignItems:'center'
}
const professionalIconsContainer = {
  display:'flex',
  flexDirection:'row',
  flexWrap: 'wrap',
  justifyContent:'space-between'
}
const professionalLifePaperStyle = {
  height:'350px',
  width:'350px',
  marginLeft: '40px',
  marginRight: '40px',
  zIndex: 1
}
const professionalDetailsPaper = {
  height:'350px',
  width:'350px',
  marginLeft: '40px',
  marginRight: '40px'
}
const professionalRolesStyle = {
  display: 'flex',
  flexDirection:'column',
  fontSize: '14px',
  fontFamily: 'sans-serif',
  lineHeight: 4
}
const professionalTextPaperStyle = {
  height:'350px',
  width:'350px',
  marginLeft: '40px',
  marginRight: '40px',
  fontWeight: 100
}
const professionalTextStyle = {
  display: 'flex',
  flexDirection:'column',
  fontSize: '13px',
  fontFamily: 'sans-serif',
  lineHeight:2
}
const experienceContainer = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  margin:'40px 40px 160px 40px',
  paddingTop: 120
}
const experienceRolesContainer = {
  width: '100%',
  display: 'flex',
  flexDirection:'column'
}
const experienceHeaderStyle = {
  display: 'flex',
  flexDirection:'column',
  alignItems:'center'
}
const experiencesStyle = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'flex-start',
  marginBottom: '50px',
  marginLeft: '70px'
}
const iconButtonContainer = {
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center',
  marginTop: '80px',
  marginBottom: '440px'
}
const experienceIconBorder = {
  borderRight: '1px solid #e0e0e0'
}

const experienceYearFormat = {
  display:'flex',
  justifyContent:'flex-end',
  fontWeight:100,
  paddingTop:'5px'
}

const experienceDetailsFormat = {
  height:'150px',
  width:'350px',
  marginLeft: '30px'
}

const experienceTitleFormat = {
  display: 'flex',
  flexDirection:'column',
  fontSize: '13px',
  fontFamily: 'sans-serif',
  lineHeight:2
}

const contactContainer = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  paddingTop: 120,
  backgroundColor: '#efefef'
}

const contactIconContainer = {
  width: '100%',
  display: 'flex',
  flexDirection:'column',
  backgroundColor:'none'
}

const contactHeader = {
  display: 'flex',
  flexDirection:'column',
  alignItems:'center'
}

const iconMenuTextStyle = {
  fontSize:'16px',
  fontFamily: 'sans-serif',
  fontWeight: 100,
}

export {
  mainContainer,
  rightElementStyling,
  GridStyle,
  appBarStyle,
  nameHeaderStyle,
  contentHeaderStyle,
  landing,
  root,
  gridList,
  aboutMeImage,
  personalMeImage,
  workExperienceImage,
  scrollNav,
  pHeaderStyle,
  urlIconButtons,
  avatarStyles,
  appBarNameStyle,
  personalLifeContainer,
  titleStyling,
  personalLifeElements,
  personalDetailsStyle,
  personalDetailsTextStyle,
  personalDetailsContentStyle,
  professionalLifeContainer,
  professionalLifeContents,
  professionalIconsContainer,
  professionalLifePaperStyle,
  professionalDetailsPaper,
  professionalRolesStyle,
  professionalTextPaperStyle,
  professionalTextStyle,
  experienceContainer,
  experienceRolesContainer,
  experienceHeaderStyle,
  experiencesStyle,
  iconButtonContainer,
  experienceIconBorder,
  experienceYearFormat,
  experienceDetailsFormat,
  experienceTitleFormat,
  contactContainer,
  contactIconContainer,
  contactHeader,
  iconMenuTextStyle
};
