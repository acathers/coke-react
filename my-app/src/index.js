import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Header,
  Menu,
  Image,
  Dropdown,
  Sticky,
  Divider,
  Item,
  Icon,
  Segment,
  Grid,
  List
} from 'semantic-ui-react';
import myImage from './res/img/background.jpg';

class TopMenu extends React.Component {

  render() {
    return (
        <div>
          <Sticky>
            <Menu size="huge" borderless classname="top menu">
              <Menu.Item href="https://us.coca-cola.com/">
                <Image size="tiny" src="https://us.coca-cola.com/content/dam/coke2016/navheader/cc-disc-white.png"/>
              </Menu.Item>

              <Dropdown item text="OUR BRANDS" icon="dropdown">
                <Dropdown.Menu>
                  <Dropdown.Item>Electronics</Dropdown.Item>
                  <Dropdown.Item>Automotive</Dropdown.Item>
                  <Dropdown.Item>Home</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown item text="SHOP" icon="dropdown">
                <Dropdown.Menu>
                  <Dropdown.Item>Electronics</Dropdown.Item>
                  <Dropdown.Item>Automotive</Dropdown.Item>
                  <Dropdown.Item>Home</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Menu.Item text="GIVE" href={"https://us.coca-cola.com/give/"}>
                GIVE
              </Menu.Item>

              <Menu.Item text="GIVE" href={"https://us.coca-cola.com/offers/"}>
                REWARDS
              </Menu.Item>

              <Menu.Menu position='right'>
                <Menu.Item>
                  <Dropdown icon="content">
                    <Dropdown.Menu>
                      <Dropdown.Item>test</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>

                <Menu.Item>
                  <Dropdown icon="user">
                    <Dropdown.Menu>
                      <Dropdown.Item>test</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>

                <Menu.Item>
                  <Dropdown icon="alarm">
                    <Dropdown.Menu>
                      <Dropdown.Item>test</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>


              </Menu.Menu>


            </Menu>
          </Sticky>


        </div>
    )
  }

}

class Middle extends React.Component {
  render() {
    return (
        <div>
          <Image fluid  src="https://us.coca-cola.com/content/dam/coke2016/bracket-refresh-2019/home-updates/OrangeVanilla_strip_desktop.gif"/>

          <Image attached fluid src={myImage}/>

        </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
        <div className={'footer div'}>

          <Container className={'footer container'}>

            <Grid className={'footer grid'} divided='vertically' columns={4} style={{ 'background-color': '#e41e28' }}>

              <Grid.Column textAlign={'center'} className="first column">

                <Header as={'h5'} style={{ 'color': '#FFFFFF ' }}>CONNECT WITH US</Header>
                <List horizontal>

                  <List.Item>
                    <Image src={'https://us.coca-cola.com/content/dam/coke2016/social-images/coke-facebook.png'}/>

                  </List.Item>
                  <List.Item>
                    <Image src={'https://us.coca-cola.com/content/dam/coke2016/social-images/coke-twitter.png'}/>
                  </List.Item>
                  <List.Item>
                    <Image src={'https://us.coca-cola.com/content/dam/coke2016/social-images/coke-youtube.png'}/>
                  </List.Item>
                  <List.Item>
                    <Image src={'https://us.coca-cola.com/content/dam/coke2016/social-images/coke-instagran.png'}/>
                  </List.Item>

                  <List.Item>
                    <Image style={{ paddingTop: '5px' }}
                           src="https://us.coca-cola.com/content/dam/coke2016/social-images/coke-cola.png"/>
                  </List.Item>
                </List>


              </Grid.Column>
              <Grid.Column>
                <Header as={'h4'} style={{ 'color': '#FFFFFF ' }}>EXPLORE</Header>
                <List.Item><a href={'https://us.coca-cola.com/home/'}>COCA-COLA</a></List.Item>

                <List.Item><a href={'https://us.coca-cola.com/home/'}>COKE ZERO SUGAR</a></List.Item>
                <List.Item><a href={'https://us.coca-cola.com/home/'}>COKE LIFE</a></List.Item>

                <List.Item><a href={'https://us.coca-cola.com/home/'}>DIET COKE</a></List.Item>

                <List.Item><a href={'https://us.coca-cola.com/home/'}>REWARDS</a></List.Item>
                <List.Item><a href={'https://us.coca-cola.com/home/'}>SIP AND SCAN FAQS</a></List.Item>
                <List.Item><a href={'https://us.coca-cola.com/home/'}>VENDING</a></List.Item>


                <List.Item><a href={'https://us.coca-cola.com/home/'}>EATS</a></List.Item>
                <List.Item><a href={'https://us.coca-cola.com/home/'}>GIVE</a></List.Item>
                <List.Item><a href={'https://us.coca-cola.com/home/'}>SHOP</a></List.Item>


              </Grid.Column>


              <Grid.Column>
                <Header as={'h4'} style={{ 'color': '#FFFFFF ' }}>COKE IN THE USA</Header>
                <List>
                  <List.Item><a href={'https://us.coca-cola.com/home/'}>COCA-COLA JOURNEY</a></List.Item>
                  <List.Item><a href={'https://us.coca-cola.com/home/'}>SHARE A COKE</a></List.Item>
                  <List.Item><a href={'https://us.coca-cola.com/home/'}>WORLD OF COCA-COLA</a></List.Item>
                  <List.Item><a href={'https://us.coca-cola.com/home/'}>COCA-COLA STORE</a></List.Item>
                  <List.Item><a href={'https://us.coca-cola.com/home/'}>COCA-COLA APP</a></List.Item>
                </List>

              </Grid.Column>
              <Grid.Column>
                <Header as={'h4'} style={{ 'color': '#FFFFFF ', 'border': 'none' }}>RESOURCES</Header>
                <List.Item><a href={'https://us.coca-cola.com/home/'}>CAREERS</a></List.Item>
                <List.Item><a href={'https://us.coca-cola.com/home/'}>COMPANY INFORMATION</a></List.Item>
                <List.Item><a href={'https://us.coca-cola.com/home/'}>PARTICIPATING BRANDS</a></List.Item>
              </Grid.Column>
              <Grid.Row textAlign={'centered'} borderless style={{ paddingTop: '70px' }}>
                <Header centered as={'h4'} style={{ 'color': '#FFFFFF ' }}> © 2019 THE COCA-COLA COMPANY. ALL RIGHTS
                  RESERVED </Header>

              </Grid.Row>
              <Grid.Row centered>

                <List textAlign={'centered'} horizontal divided centered>
                  <List.Item><a href={'https://us.coca-cola.com/home/'}>CONTACT US</a> </List.Item>

                  <List.Item><a href={'https://us.coca-cola.com/home/'}>FAQs</a></List.Item>
                  <List.Item><a href={'https://us.coca-cola.com/home/'}>TERMS OF USE</a></List.Item>
                  <List.Item><a href={'https://us.coca-cola.com/home/'}>RULES</a></List.Item>
                  <List.Item><a href={'https://us.coca-cola.com/home/'}>PRIVACY</a></List.Item>
                  <List.Item><a href={'https://us.coca-cola.com/home/'}>MOBILE TERMS & CONDITIONS</a></List.Item>
                  <List.Item><a href={'https://us.coca-cola.com/home/'}>ABOUT OUR ADS</a></List.Item>
                  <List.Item><a href={'https://us.coca-cola.com/home/'}>SITEMAP</a></List.Item>

                </List>

              </Grid.Row>


            </Grid>
          </Container>
        </div>

    )
  }
}

class Coke extends React.Component {

  render() {
    return (
        <div style={{ minHeight: '105vh' }}>
          <TopMenu/>
          <Middle/>
          <Footer/>
        </div>
    );
  }
}

ReactDOM.render(<Coke/>, document.getElementById('root'));