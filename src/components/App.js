import React, { Component } from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

import ContestList from './ContestsList';
import Contest from './Contests';
import * as api from '../api';

const pushState = (obj, url) => window.history.pushState(obj, '', url);

class App extends Component {
  static propTypes = {
    initialData: PropTypes.object.isRequired,
  };

  state = this.props.initialData;
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  fetchContests = (contestId) => {
    pushState({ currentContestId: contestId }, `/contests/${contestId}`);
    api.fetchContest(contestId).then((contest) => {
      this.setState({
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest,
        },
      });
    });
  };

  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    }

    return 'Naming Contests';
  }

  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }

  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.currentContest()} />;
    }
    return (
      <ContestList
        onContestList={this.fetchContests}
        contests={this.state.contests}
      />
    );
  }

  render() {
    return (
      <div>
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
