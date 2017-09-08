import React from "react";

export default class ListItem extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.id, this.props.fulfilled);
  };

  render() {
    const styles = {
      textDecoration: this.props.fulfilled ? "line-through" : "none"
    };

    return (
      <div style={styles} onClick={this.handleClick}>
        {this.props.text}
      </div>
    );
  }
}
