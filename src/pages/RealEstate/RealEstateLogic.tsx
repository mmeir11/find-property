import { useCallback, useEffect, useMemo, useState } from 'react'
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

    filteredTransactions.sort((propertyA, propertyB) => sortPriceAsc ? propertyA.price - propertyB.price : propertyB.price - propertyA.price)

    setFilteredTransactions(filteredTransactions)
  }, [addressFilter, maxRoomNumberFilter, minRoomNumberFilter, sortPriceAsc, transactions.properties])

  function getTransactions(): Transactions {

    const properties = transactionsData.properties.map((property, index) => (
      {
        ...property,
        image: require(`../../assets/Images/prop${(index % 5) + 1}.jpg`),
        address: typeof property.address !== 'string' ? ' כתובת לא ידועה' : property.address,
        price: Number(property.price.toString().replaceAll(',', ''))
      }))

    return { ...transactionsData, properties }
  }

  const addresses = useMemo(() => Object.keys(
    transactions?.properties.reduce((addresses: Record<string, string>, property) => {
      if (typeof property.address === 'string') {
        addresses[property.address] = property.address
      }

      return addresses
    }, {})
  ), [transactions?.properties])

  const toggleSortByPrice = useCallback(() => setSortPriceAsc((prev) => !prev),[setSortPriceAsc])

  return {
    transactions,
    addresses,
    addressFilter,
    setAddressFilter,
    filteredTransactions,
    minRoomNumberFilter,
    setMinRoomNumberFilter,
    maxRoomNumberFilter,
    setMaxRoomNumberFilter,
    sortPriceAsc,
    toggleSortByPrice,
  }
}

export default RealEstateLogic