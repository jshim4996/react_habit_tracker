import React, { PureComponent } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";
// import HeaderBar from "./headerBar";

class Habits extends PureComponent {
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  handleReset = () => {
    this.props.onReset();
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              // count={habit.count}
              // name={habit.name}
              onIncrement={this.props.onIncrement}
              onDcrement={this.props.onDcrement}
              onDelete={this.props.onDelete}
              onAdd={this.handleAdd}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.handleReset}>
          Reset Button
        </button>
      </>
    );
  }
}

export default Habits;
