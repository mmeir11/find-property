import { useEffect, useState } from 'react'
import { Property, Transactions } from '../../@types'
import { transactions as transactionsData } from '../../data'

const RealEstateLogic = () => {
  const [transactions,] = useState<Transactions>(() => getTransactions())
  const [filteredTransactions, setFilteredTransactions] = useState<Array<Property>>(transactions.properties)
  const [addressFilter, setAddressFilter] = useState('')
  const [minRoomNumberFilter, setMinRoomNumberFilter] = useState(0)
  const [maxRoomNumberFilter, setMaxRoomNumberFilter] = useState(10)
  const [sortPriceAsc, setSortPriceAsc] = useState(true)

  useEffect(() => {
    const filteredTransactions = transactions.properties.filter((property) => (
      property.address.toString().includes(addressFilter)
      && property.num_rooms >= minRoomNumberFilter && property.num_rooms <= maxRoomNumberFilter
    ))

    filteredTransactions.sort((propertyA, propertyB) => (Number(propertyA.price) < Number(propertyB.price) && sortPriceAsc ? -1 : 1))

    setFilteredTransactions(filteredTransactions)
  }, [addressFilter, maxRoomNumberFilter, minRoomNumberFilter, sortPriceAsc, transactions.properties])

  function getTransactions(): Transactions {
    return transactionsData
  }

  const addresses = transactions?.properties.reduce((addresses: Array<string>, property) => {
    if (typeof property.address === 'string') {
      addresses.push(property.address)
    }

    return addresses
  }, [])

  const toggleSortByPrice = () => setSortPriceAsc((prev) => !prev)

  return {
    transactions,
    addresses,
    addressFilter,
    setAddressFilter,
    filteredTransactions,
    minRoomNumberFilter, setMinRoomNumberFilter,
    maxRoomNumberFilter, setMaxRoomNumberFilter,
    sortPriceAsc,
    toggleSortByPrice,
  }
}

export default RealEstateLogic