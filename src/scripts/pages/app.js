import React from 'react';

export default class index extends React.Component {
  render(){
    return (
      <div>
        {React.cloneElement(this.props.children, {...this.props})}
      </div>
    )
  }
}