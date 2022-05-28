import { AppBar, Tabs } from '@mui/material'
import NavBarLogic from './NavBarLogic'

const Navbar = () => {
  const {
    renderTabs,
    value,
    handleChangeTab,
  } = NavBarLogic()

  return (
    <AppBar position="static" color="transparent" style={{ top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChangeTab}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        {renderTabs}
      </Tabs>
    </AppBar>
  )
}

export default Navbar