import React from 'react';

const LeaderboardEntry = ({ studentName, totalMarks }) => {
  return (
    <div>
      <p>
        <strong>{studentName}</strong>: {totalMarks} marks
      </p>
    </div>
  );
};

export default LeaderboardEntry;