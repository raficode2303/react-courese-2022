// components
import { Wrapper, SearchInput, OnlyInStock } from './SearchBar.styles'
// Context
import { useAppContext } from '../context'

export const SearchBar = () => {
  const {
    searchValue,
    ShowOnlyInStock,
    products,
    setSearchValue,
    setShowOnlyInStock,
    seProducts,
  } = useAppContext()
  return (
    <Wrapper className='search-bar'>
      <SearchInput
        type='text'
        placeholder='search Item...'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <OnlyInStock
        type='checkbox'
        id='only-in-stock-filter'
        name='only-in-stock-filter'
        checked={ShowOnlyInStock}
        onChange={() => setShowOnlyInStock((prev) => !prev)}
      />
      <label htmlFor='only-in-stock-filter'>Only show products in stock</label>
    </Wrapper>
  )
}
