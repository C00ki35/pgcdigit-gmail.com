import React, { Component } from "react";
import * as api from "../utils/api";
class Vote extends Component {
  state = {
    votes: 0
  };
  voteUpdater = vote => {
    api.vote(this.props.item_id, vote, this.props.type);
    this.setState(currentState => {
      return { votes: currentState.votes + vote };
    });
  };
  render() {
    const { votes } = this.state;
    return (
      <div className={"voter"}>
        <button
          disabled={votes > 0 || sessionStorage.getItem("loggedin") === null}
          onClick={event => {
            if (this.state.votes !== 1) {
              this.voteUpdater(1);
            }
          }}
        >
          <span role="img" aria-label="vote-up">
            <i className="fas fa-arrow-circle-up"></i>
          </span>
        </button>{" "}
        Votes: {this.props.votes + votes}
        <button
          disabled={votes < 0 || sessionStorage.getItem("loggedin") === null}
          onClick={event => {
            if (this.state.votes !== 0) {
              this.voteUpdater(-1);
            }
          }}
        >
          <span role="img" aria-label="vote-down">
            <i className="fas fa-arrow-circle-down"></i>
          </span>
        </button>
      </div>
    );
  }
}
export default Vote;
