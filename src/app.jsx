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
// 형제를 노드 들이 있을경우 태그들을 묶어주어야 한다
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
 * - 형태는 html 태그 처럼 보이지만 실제 언어는 자바스크립트 이다
 * - js 기능을 태그 내에서 사용 가능하다
 */
// return React.createElement("h1", {}, "Hello"); // jsx 미적용, 직관적이지 않음
// }

export default App;
