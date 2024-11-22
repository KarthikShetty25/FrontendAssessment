import React from 'react';
import { TextField } from '@mui/material';

interface CalculatorInputProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const CalculatorInput: React.FC<CalculatorInputProps> = ({ input, setInput }) => {
  return (
    <TextField
      label="Enter Numbers"
      variant="outlined"
      fullWidth
      value={input}
      onChange={(e) => setInput(e.target.value)}
      margin="normal"
    />
  );
};

export default CalculatorInput;
