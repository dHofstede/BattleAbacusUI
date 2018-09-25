import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const calcAttrBonus = (attrScore) => {
	return Math.floor((attrScore - 10) / 2);
}

class AttributeRow extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      attrBonus: calcAttrBonus(this.props.attribute.attrScore)
    };
  }

	componentDidUpdate(prevProps){
		if(calcAttrBonus(this.props.attribute.attrScore) !== this.state.attrBonus) {
    	this.setState({attrBonus: calcAttrBonus(this.props.attribute.attrScore)});
		}
	}

  render(){
    return (
      <div>
			<span>{this.props.attribute.attrName}: </span>
			<span>{this.props.attribute.attrScore} - </span>
			<span>{this.state.attrBonus}</span>
			<button onClick={() => {this.props.modifyAttribute(this.props.attribute.attrId, (this.props.attribute.attrScore + 1))}}>+1</button>
			<button onClick={() => {this.props.modifyAttribute(this.props.attribute.attrId, (this.props.attribute.attrScore - 1))}}>-1</button>
			</div>
    );
  }
}

export default AttributeRow;
