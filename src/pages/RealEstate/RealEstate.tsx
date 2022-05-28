import { makeStyles } from '@mui/styles'
import { useCallback } from 'react'
import SearchBar from '../../components/SearchBar'
import RealEstateLogic from './RealEstateLogic'
import { Button, FormControl, InputLabel, List, ListItem, MenuItem, Select, Typography } from '@mui/material'
import Range from '../../components/Range'
import SortIcon from '@mui/icons-material/Sort'
import PropertyCard from '../../components/PropertyCard'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  filterBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#03045e',
    borderRadius: 15,
  },
  rangesContainer: {
    display: 'flex',
    flex: 1,
    padding: 8
  },
  filterBarRight: {
    display: 'flex',
    flex: 4,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'center !important',
    backgroundColor: '#eae0d5',
    paddingBottom: '0 !important',
    paddingTop: '0 !important',
  },
  sortButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    flex: 1,
    paddingLeft: 8
  },
}), { name: 'RealEstate' })

const RealEstate = () => {
  const classes = useStyles()

  const {
    filteredTransactions,
    addressFilter,
    setAddressFilter,
    addresses,
    minRoomNumberFilter,
    setMinRoomNumberFilter,
    maxRoomNumberFilter,
    setMaxRoomNumberFilter,
    sortPriceAsc,
    toggleSortByPrice,
  } = RealEstateLogic()

  const renderListItems = useCallback(() => {
    const twoInRow = []

    for (let i = 0; i < filteredTransactions.length; i += 3) {
      const property = filteredTransactions[i];
      const property2 = filteredTransactions[i + 1];
      const property3 = filteredTransactions[i + 2];

      twoInRow.push(
        <ListItem key={property.id} className={classes.listItem}>
          <PropertyCard data={property} />
          {property2 && <PropertyCard data={property2} />}
          {property3 && <PropertyCard data={property3} />}
        </ListItem>
      )
    }
    return twoInRow
  }, [classes.listItem, filteredTransactions])

  const SelectRoomNumber = useCallback(() => (
    <FormControl fullWidth>
      <InputLabel id="range-select-label">חדרים: {`מ: ${minRoomNumberFilter} עד ${maxRoomNumberFilter}`}</InputLabel>
      <Select
        labelId="range-select-label"
        label='חדרים'
      >
        <MenuItem>
          <Range label=':מ' value={minRoomNumberFilter} onChange={setMinRoomNumberFilter} defaultValue={0} />
        </MenuItem>
        <MenuItem>
          <Range label='עד:' value={maxRoomNumberFilter} onChange={setMaxRoomNumberFilter} defaultValue={10} />
        </MenuItem>
      </Select>
    </FormControl>
  ), [maxRoomNumberFilter, minRoomNumberFilter, setMaxRoomNumberFilter, setMinRoomNumberFilter])

  return (
    <div className={classes.root} dir='rtl'>
      <div className={classes.filterBar}>
        <Typography variant='h6' flex={3} paddingRight={5}>
          איזה נכס תרצו לחפש?
        </Typography>
        <div className={classes.filterBarRight}>
          <SearchBar
            label='הזן כתובת מלאה (רחוב, מספר בית)'
            optionsData={addresses}
            value={addressFilter}
            onChange={setAddressFilter}
          />
          <div className={classes.rangesContainer}>
            <SelectRoomNumber />
          </div>
          <div className={classes.sortButtonContainer}>
            <Button
              variant="outlined"
              onClick={toggleSortByPrice}
              endIcon={<SortIcon sx={{ paddingRight: 1, height: 40 }} />}
            >
              {sortPriceAsc ? 'מחיר - היקר לזול' : 'מחיר -  זול ליקר'}
            </Button>
          </div>
        </div>
      </div>
      <List sx={{ padding: 0 }}>
        {renderListItems()}
      </List>
    </div >
  )
}

export default RealEstate