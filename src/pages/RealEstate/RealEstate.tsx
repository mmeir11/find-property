import { makeStyles } from '@mui/styles'
import React from 'react'
import SearchBar from '../../components/SearchBar'
import RealEstateLogic from './RealEstateLogic'
import utf8 from 'utf8'
import { Button, List, ListItem, Typography } from '@mui/material'
import Range from '../../components/Range'
import SortIcon from '@mui/icons-material/Sort'
import PropertiesTable from '../../components/PropertiesTable'

// check how to handle the original transactions.json file (with \\)
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10
  },
  filterBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rangesContainer: {
    display: 'flex',
    flex: 1,
  },
  filterBarRight: {
    display: 'flex',
  }
}), { name: 'RealEstate' })

const RealEstate = () => {
  const classes = useStyles()

  const {
    filteredTransactions,
    addressFilter,
    setAddressFilter,
    addresses,
    minRoomNumberFilter, setMinRoomNumberFilter,
    maxRoomNumberFilter, setMaxRoomNumberFilter,
    sortPriceAsc,
    toggleSortByPrice,
  } = RealEstateLogic()

  return (
    <div className={classes.root} dir='rtl'>
      <div className={classes.filterBar}>
        <div className={classes.filterBarRight}>
          <SearchBar
            optionsData={addresses}
            value={addressFilter}
            onChange={setAddressFilter}
          />
          <div
          // style={{ display: 'flex' }}
          >
            <Typography>
              חדרים:
            </Typography>
            <div className={classes.rangesContainer}>
              <Range label='עד:' value={maxRoomNumberFilter} onChange={setMaxRoomNumberFilter} defaultValue={10} />
              <Range label='מ:' value={minRoomNumberFilter} onChange={setMinRoomNumberFilter} defaultValue={0} />
            </div>
          </div>
        </div>

        <Typography variant='h6'>
          איזה נכס תרצו לחפש?
        </Typography>

        <div>
          <Button variant="outlined" onClick={toggleSortByPrice} endIcon={<SortIcon sx={{ paddingRight: 1 }} />}>
            {sortPriceAsc ? 'מחיר - היקר לזול' : 'מחיר -  זול ליקר'}
          </Button>
        </div>

      </div>
      <PropertiesTable rows={filteredTransactions} />
      {/* <List>
        {filteredTransactions.map((transaction) => (
          <ListItem key={transaction.id} sx={{ display: 'flex', flexDirection: 'column', borderBottom: 'solid' }}>
            <Typography margin='normal'>
              {transaction.address}
            </Typography>
            <Typography margin='normal'>
              {transaction.num_rooms}
            </Typography>
            <Typography margin='normal'>
              {Number(transaction.price).toLocaleString()}
            </Typography>
          </ListItem>
        ))}
      </List> */}
    </div >
  )
}

export default RealEstate