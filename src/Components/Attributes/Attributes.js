import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AttributeRow from './AttributeRow'

class Attributes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attributes: this.props.attributes.scores,
      modifyAttribute: this.props.modifyAttribute
    };
  }

  componentDidUpdate(prevProps) {
    /*this.setState({
			attrName: this.props.attribute.attrName,
    	attrScore: this.props.attribute.attrScore,
    	attrBonus: calcAttrBonus(this.props.attribute.attrScore)
		})*/
  }

  render(){
    return (
      <div>
        { this.props.attributes.scores.map(a => <AttributeRow attribute={a} modifyAttribute={this.props.modifyAttribute} />)}
      </div>

    );
  }
}

export default Attributes;
