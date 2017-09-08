import React from "react";
import ListItem from "./ListItem";
import Form from "./Form";

export default class List extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => {
          return (
            <ListItem
              key={item.id}
              id={item.id}
              text={item.text}
              fulfilled={item.fulfilled}
              onClick={() => {
                if (!this.props.editable) return;
                this.props.onChange(item.id, item.fulfilled);
              }}
            />
          );
        })}
      </div>
    );
  }
}
