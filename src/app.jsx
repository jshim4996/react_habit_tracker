import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
    habitsTot: 0,
  };

  handleIncrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;

    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDcrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits });
  };

  handleReset = () => {
    // const habits = this.state.habits.map((habit) => {
    //   habit.count = 0;
    //   return habit;
    // });
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDcrement={this.handleDcrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

// function App() {
//   // return <Habit />;
//   return <Habits />;

// const name = "jshim";
// const name = undefined;
// ????????? ?????? ?????? ???????????? ???????????? ??????????????? ??????
// return (
//   <>
//     <h1>Hello</h1>
//     {name && <h1>Hello {name}:)</h1>}
//     {[1, 2].map((item) => (
//       <h1>{item}</h1>
//     ))}
//   </>
// );
/**
 *  jsx
 * - ????????? html ?????? ?????? ???????????? ?????? ????????? ?????????????????? ??????
 * - js ????????? ?????? ????????? ?????? ????????????
 */
// return React.createElement("h1", {}, "Hello"); // jsx ?????????, ??????????????? ??????
// }

export default App;
