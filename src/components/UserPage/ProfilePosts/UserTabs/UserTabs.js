import { AppBar, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'
import './Tabs.scss'

export default function ProfileTabs() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };


  return(
    <div className="tabs-container">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="My Posts"/>
          <Tab label="Favorited Posts"/>
        </Tabs>
      </AppBar>
    </div>
  )
};
