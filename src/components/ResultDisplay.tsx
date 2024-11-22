import React from 'react';
import { Typography } from '@mui/material';

interface ResultDisplayProps {
  result: number | string;
  error: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, error }) => {
  return (
    <div>
      {error ? (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      ) : (
        <Typography variant="h6">Result: {result}</Typography>
      )}
    </div>
  );
};

export default ResultDisplay;
