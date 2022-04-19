import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import WeekStarting from './WeekStarting'
import HoursRow from './HoursRow'
import dayjs from 'dayjs'
import IncomeCalculator from './IncomeCalculator';
// @ts-ignore
import Locale from '../lib/locale'

dayjs.locale(Locale)

export default function Table() {


  const [startDate, setStartDate] = useState<any>(dayjs());
  const [dateList, setDateList] = useState<Array<string>>([]);
  const [frequency, setFrequency] = useState<number>(8);
  const [totalHours, setTotalHours] = useState<Object>({});
  const [hoursSum, setHoursSum] = useState<number>(0);

  useEffect(() => {
    generateDates(startDate, frequency);
  }, [startDate, frequency]);

  useEffect(() => {
    calculateTotalHours();
  }, [totalHours]);


  function generateDates(date: Date | string, number: number) {
    // Reset lists
    setDateList([])

    for (let i = 0; i < number - 1; i++) {
      let next: string = dayjs(date).add(i, 'day').format('ddd, MMM D');
      setDateList(list => [...list, next]);
      // setTotalHours(totalHours => ({ ...totalHours, [next]: 0 }))
    }
  }


  function addDayHours(hours: React.SetStateAction<number>, date: string) {
    hours !== undefined && setTotalHours({ ...totalHours, [date]: hours })
  }

  function calculateTotalHours() {
    // Check object isn't empty and calculate total hours
    const hours: number = Object.keys(totalHours).length !== 0 && Object.values(totalHours).reduce((val, total) => val + total);
    console.log(hours)
    setHoursSum(hours);
  }

  return (
    <>
      <div className='app'>
        <div className='app-controls'>
          <WeekStarting handleChange={(date: React.SetStateAction<Date>) => setStartDate(date)} startDate={startDate} />
          <Dropdown handleChange={(value: React.SetStateAction<number>) => setFrequency(value)} value={frequency} />
        </div>
        <div className='table'>
          <div className='table-head'>
            <div className='table-head__date'>Week starting</div>
            <div className='table-head__hours'>Total</div>
          </div>
          <div className='grid'>
            {dateList.map((value: string, index: number) =>
              <div key={value} className='date-row'>
                <div className='date-cell'>{value}</div>
                <HoursRow key={index} handleTotalHours={(hours: React.SetStateAction<number>) => addDayHours(hours, value)} />
              </div>
            )}
          </div>
        </div>
        <div className='calculator'>
          <div className='calculator-column'>
            <div className='calculator-row'>
              <span>Total Hours</span>
              <div className='hours-sum'>
                {hoursSum} hrs
              </div>
            </div>
            <div className='calculator-row'>
              <span>Rate Per Hour</span>
              <IncomeCalculator />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}