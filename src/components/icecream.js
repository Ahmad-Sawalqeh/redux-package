import React, { Fragment } from "react";
import { connect } from "react-redux";
import { buyIceCream } from '../redux/actions/actionsCreater.js';

const IceCream = props => {
    console.log('IceCream props => ',props);
    return (
      <Fragment>
        <div>
          <h3>number of icecream is {props.numOfIceCreamsPropsName}</h3>
          <button onClick={props.dispatchBuyIceCreamPropsName}>buy icecream</button>
        </div>
      </Fragment>
    );
};

// function to help turn the state into props and use it in the component
// taks in tow parameters (state, ownProps)
function mapStateToProps(state) {
  return {
    numOfIceCreamsPropsName: state.iceCream.numOfIceCreams
  };
}

// function to help turn the dispatch method into props and use it in the component
function mapDispatchToProps(dispatch) {
  return {
    dispatchBuyIceCreamPropsName: () => dispatch(buyIceCream()),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCream);