import { Component } from "react";

import Item from "../Item";
import "./index.css";

const initialList = [
  {
    id: 1,
    title: "Book the ticket for today evening",
  },
  {
    id: 2,
    title: "Rent the movie for tomorrow movie night",
  },
  {
    id: 3,
    title: "Confirm the slot for the yoga session tomorrow morning",
  },
  {
    id: 4,
    title: "Drop the parcel at Bloomingdale",
  },
  {
    id: 5,
    title: "Order fruits on Big Basket",
  },
  {
    id: 6,
    title: "Fix the production issue",
  },
  {
    id: 7,
    title: "Confirm my slot for Saturday Night",
  },
  {
    id: 8,
    title: "Get essentials for Sunday car wash",
  },
];
class Simple extends Component {
  state = { todosList: initialList };

  deleteTodo = (id) => {
    const { List } = this.state;
    const updatedList = List.filter((each) => each.id !== id);
    this.setState({ List: updatedList });
  };

  render() {
    const { List } = this.state;
    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">glosories</h1>
          <ul className="todos-list">
            {sList.map((each) => (
              <TodoItem
                key={each.id}
                todoDetails={each}
                deleteTodo={this.delete}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Simple;
