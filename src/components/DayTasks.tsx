import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import NotesIcon from '@mui/icons-material/Notes';

export default function DayTasks() {

  return (
    <>
      <Button variant="contained" startIcon={<NotesIcon />}>
        Add Notes
      </Button>
    </>
  )
}