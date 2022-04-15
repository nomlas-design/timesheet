import { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import TextField from '@mui/material/TextField';

export default function IncomeCalculator() {

  const [amount, setAmount] = useState<React.ChangeEvent<HTMLInputElement> | number>();

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement> | any) => {
    setAmount(event.target.value);
  }

  return (
    <FormControl sx={{ width: 120 }} variant='outlined'>
      <OutlinedInput
        id="rate-per-hour"
        value={amount}
        placeholder='0.00'
        onChange={handleAmountChange}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        inputProps={{
          'aria-label': 'Rate Per Hour',
          inputMode: 'numeric',
          pattern: '[0-9]*'
        }}
      />
    </FormControl>
  )
}