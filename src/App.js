import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/Navbar/Navbar';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Attributes from './Components/Attributes'

/*const characterStats = {
  attributes: {
    scores:[{
      attrName: "Strength",
      attrScore: 24,
      attrId: 0
    },
    {
      attrName: "Dexterity",
      attrScore: 14,
      attrId: 1
    },
    {
      attrName: "Constitution",
      attrScore: 11,
      attrId: 2
    },
    {
      attrName: "Intelligence",
      attrScore: 22,
      attrId: 3
    },
    {
      attrName: "Wisdom",
      attrScore: 12,
      attrId: 4
    },
    {
      attrName: "Charisma",
      attrScore: 11,
      attrId: 5
    }],
    modifyAttribute: this.modifyAttribute
}
}*/
let characterStats = {
  attributes: {
    scores:[{
      attrName: "Strength",
      attrScore: 24,
      attrId: 0
    },
    {
      attrName: "Dexterity",
      attrScore: 14,
      attrId: 1
    },
    {
      attrName: "Constitution",
      attrScore: 11,
      attrId: 2
    },
    {
      attrName: "Intelligence",
      attrScore: 22,
      attrId: 3
    },
    {
      attrName: "Wisdom",
      attrScore: 12,
      attrId: 4
    },
    {
      attrName: "Charisma",
      attrScore: 11,
      attrId: 5
    }]
}
}

class App extends React.Component {
  constructor(props) {
    super(props);

    //set modifyFunctions
    characterStats.attributes.modifyAttribute = this.modifyAttribute;

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      character: characterStats,
      modifyAttribute: this.modifyAttribute
    };
  }

  modifyAttribute = (attrId, newScore) => {
    const newCharacter = this.state.character;
    newCharacter.attributes.scores.map(a => {
      if(a.attrId === attrId) {
        a.attrScore = newScore
      }
    });
    this.setState({character: newCharacter})
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Attributes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Skills
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Attributes attributes={this.state.character.attributes} modifyAttribute={this.state.modifyAttribute}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              Stealth: {14+this.state.character.attributes.scores[1].attrScore}
              <br />
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default App;
