import { Tab } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const NavBarLogic = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState(0);

  const tabs = [
    {
      label: 'Real Estate',
      path: '/real-estate'
    },
    {
      label: 'Map',
      path: '/map'
    }
  ]

  const renderTabs = tabs.map((tab, index) => (
    <Tab
      label={tab.label}
      index={index}
      onClick={() => navigate(tab.path)}
      key={tab.label}
      sx={{ color: 'white' }}
    />
  ))

  useEffect(() => {
    const currencyPath = location.pathname
    if (currencyPath !== '/real-estate') {
      // If there were more tabs I would look for the correct index
      setValue(1)
    }
  }, [])

  const handleChangeTab = (_e, newValue) => {
    setValue(newValue);
  };

  return {
    renderTabs,
    value,
    handleChangeTab,
  }
}

export default NavBarLogic