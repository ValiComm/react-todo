import React from "react";
import List from "./List";
import Form from "./Form";

export default class Page extends React.Component {
  state = {
    items: [
      {
        id: "1",
        text: "Todo 1",
        fulfilled: false
      },
      {
        id: "2",
        text: "Todo 2",
        fulfilled: false
      },
      {
        id: "3",
        text: "Todo 3",
        fulfilled: true
      }
    ]
  };

  handleSubmit = data => {
    const { items } = this.state;
    this.setState({
      items: [...items, { id: items.length + 1, text: data.inputValue }]
    });
  };

  handleFulfill = (id, isFulfilled) => {
    if (!id) return;

    const updatedItems = this.state.items.map(item => {
      if (item.id !== id) return item;
      return { ...item, fulfilled: !item.fulfilled };
    });

    this.setState({ items: updatedItems });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} />
        <List
          items={this.state.items}
          editable={true}
          onChange={this.handleFulfill}
        />
        <hr />
        <List items={this.state.items} onClick={this.handleFulfill} />
      </div>
    );
  }
}
