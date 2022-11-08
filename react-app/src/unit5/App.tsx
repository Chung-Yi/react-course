import React from "react";

type BtnProps = {
  clickHandler: () => void;
};
type BtnState = {};

class Btn extends React.Component<BtnProps, BtnState> {
  constructor(props: BtnProps) {
    super(props);
  }

  render(): React.ReactNode {
    return <button onClick={this.props.clickHandler}>+1</button>;
  }
}

type AppProps = {};
type AppState = {
  count: number;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      count: 0,
    };

    this.countClickHandler = this.countClickHandler.bind(this);
  }

  countClickHandler() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  componentDidMount(): void {
    console.log("mount");
  }

  componentDidUpdate(
    prevProps: Readonly<AppProps>,
    prevState: Readonly<AppState>,
    snapshot?: any
  ): void {
    console.log("update: ", this.state.count);
  }

  componentWillUnmount(): void {
    console.log("unmount");
  }

  render(): React.ReactNode {
    return (
      <>
        <h1>count: {this.state.count}</h1>
        <Btn clickHandler={this.countClickHandler} />
      </>
    );
  }
}

export default App;
