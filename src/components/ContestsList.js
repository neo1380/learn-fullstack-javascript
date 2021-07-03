import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestLists = ({ contests, onContestList }) => (
  <div className="ContestList">
    {Object.keys(contests).map((contestId) => (
      <ContestPreview
        key={contestId}
        onClick={onContestList}
        {...contests[contestId]}
      />
    ))}
  </div>
);

ContestLists.propTypes = {
  contests: PropTypes.object,
  onContestList: PropTypes.func.isRequired,
};

export default ContestLists;
