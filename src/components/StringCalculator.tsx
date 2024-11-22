// src/components/StringCalculator.tsx
import React, { useState } from 'react';
import { Button, Container, Box, Typography } from '@mui/material';
import CalculatorInput from './CalculatorInput';
import ResultDisplay from './ResultDisplay';
import { add } from '../utils/stringCalculator'; // Import the add function

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | string>('');
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    try {
      const sum = add(input);  // Call the add function
      setResult(sum);
      setError('');
    } catch (e:any) {
      setError(e.message); // Show error message
      setResult('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop={4}
        padding={3}
        borderRadius={2}
        boxShadow={3}
        bgcolor="background.paper"
      >
        <Typography variant="h4" gutterBottom>
          String Calculator
        </Typography>

        {/* Calculator Input Component */}
        <CalculatorInput input={input} setInput={setInput} />

        <Button
          variant="contained"
          color="primary"
          onClick={handleCalculate}
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Calculate
        </Button>

        {/* Result Display Component */}
        <Box mt={3}>
          <ResultDisplay result={result} error={error} />
        </Box>
      </Box>
    </Container>
  );
};

export default StringCalculator;
