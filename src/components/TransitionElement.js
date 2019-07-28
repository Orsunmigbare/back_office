import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';

class TransitionElement extends Component {
    render(){
        return(
            <CSSTransition
          in = {this.props.in}
          timeout = {300}
          classNames = {this.props.transClass}
          unmountOnExit 
          >
         {this.props.child}
          </CSSTransition>
        )
    }
}

export default TransitionElement