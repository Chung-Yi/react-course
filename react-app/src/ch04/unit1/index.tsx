import { BasePrivateKeyEncodingOptions } from "crypto";
import React from "react";

type AProps = {
  totalScore: number;
};
type AState = {
  //   totalScore: number;
};

type BProps = {};
type BState = {
  totalScore: number;
};

function getCurrentScore() {
  return 100;
}

function getScoreByBoardName(boardName: String) {
  if (boardName === "boardA") {
    return 200;
  }
  if (boardName === "boardB") {
    return 1000;
  }
  return 0;
}

class ScoreBoardA extends React.Component<AProps, AState> {
  constructor(props: AProps) {
    super(props);
    // this.state = {
    //   totalScore: 0,
    // };
  }

  componentDidMount(): void {
    // this.setState({
    //   totalScore: getCurrentScore() + getScoreByBoardName("boardA"),
    // });
  }

  render(): React.ReactNode {
    return (
      <>
        {/* <p>A Total Score: {this.state.totalScore}</p> */}
        <p>A Total Score: {this.props.totalScore}</p>
      </>
    );
  }
}

class ScoreBoardB extends React.Component<BProps, BState> {
  constructor(props: BProps) {
    super(props);
    this.state = {
      totalScore: 0,
    };
  }

  componentDidMount(): void {
    this.setState({
      totalScore: getCurrentScore() + getScoreByBoardName("boardB"),
    });
  }

  render(): React.ReactNode {
    return (
      <>
        <p>Total Score: {this.state.totalScore}</p>
      </>
    );
  }
}

//HOC
function withTotalScore(
  WrappedComponent: React.ComponentType<any>,
  boardName: string
) {
  return class extends React.Component<{}, { totalScore: number }> {
    constructor(props: {}) {
      super(props);
      this.state = {
        totalScore: 0,
      };
    }

    componentDidMount(): void {
      this.setState({
        totalScore: getCurrentScore() + getScoreByBoardName(boardName),
      });
    }

    render(): React.ReactNode {
      return <WrappedComponent totalScore={this.state.totalScore} />;
    }
  };
}

function Main() {
  const WrappedComponentA = withTotalScore(ScoreBoardA, "boardA");
  const WrappedComponentB = withTotalScore(ScoreBoardB, "boardB");
  return (
    <>
      {/* <ScoreBoardA />
      <ScoreBoardB /> */}

      <WrappedComponentA />
      <WrappedComponentB />
    </>
  );
}

export default Main;
