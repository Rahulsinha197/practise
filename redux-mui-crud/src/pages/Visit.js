import React, { Component } from "react";
import HoverCounterTwo from "../components/HoverCounterTwo";
import ClickCounterTwo from "../components/ClickCounterTwo";
import Counter from "../components/Counter";

export default class Visit extends Component {
  render() {
    return (
      <div>
        <Counter
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />

        <Counter
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />

        {/* <div>
          <ClickCounterTwo />
        </div>
        <div>
          <HoverCounterTwo />
        </div>
        <div>
          <User render={(isLoggedIn) => (isLoggedIn ? "Rahul" : "Anonymous")} />
        </div> */}
      </div>
    );
  }
}
