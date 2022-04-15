import React, { useEffect, useState } from 'react';
import TimeInOut from './TimeInOut';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

type DropdownProps = {
  handleTotalHours: Function
}

export default function HoursRow({ handleTotalHours }: DropdownProps) {

  const [hours, setHours] = useState<Array<number>>([]);
  const [hoursList, setHoursList] = useState<Array<any>>([]);
  const [totalHours, setTotalHours] = useState<number>(0);

  useEffect(() => {
    let totalHours;
    if (hours.length > 0) {
      totalHours = hours?.reduce((val, total) => {
        return val + total;
      });
      setTotalHours(totalHours)
    }
    else {
      setTotalHours(0)
    }
  }, [hours]);

  useEffect(() => {
    console.log(totalHours)
    handleTotalHours(totalHours)
  }, [totalHours])

  function addHours(value: React.SetStateAction<any>) {
    const newHours = [...hours];
    newHours[hoursList.length] = value;
    newHours.length = hoursList.length + 1;
    setHours(newHours);
  }

  const incremenetHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setHoursList([...hoursList, <div className='timepicker'><TimeInOut key={hoursList.length} handleHoursChange={addHours} /></div>])
  };

  const decremenetHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newHoursList = [...hoursList];
    newHoursList.pop();
    setHoursList(newHoursList);
    const newHours = [...hours];
    newHours.pop();
    setHours(newHours);
  };

  return (
    <div className='hours-wrapper'>
      <div className='timepickers'>
        <div className='hours-row'>{hoursList}</div>
        <Button variant="contained" color="success" onClick={incremenetHandler} />
        <Button variant="contained" color="error" onClick={decremenetHandler} />
      </div>
      <div className="total-hours">{totalHours} hrs</div>
    </div>
  )
}