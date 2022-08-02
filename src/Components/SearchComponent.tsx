import { TextField } from '@mui/material';
import * as React from 'react';
import initialList from '../mockJson.json';
import { skillCardsInterface } from '../Skills';

interface SearchComponentProps { 
  searchItemCallback: (list: skillCardsInterface[]) => void
}

const searchStyle = {
      margin: "1rem",
      width: "50%"
}

const SearchComponent = ({searchItemCallback}: SearchComponentProps) => {

    const [searchValue, setSearchValue] = React.useState('')

    React.useEffect(() => {
        if (searchValue !== '') {
          searchItemCallback(initialList.filter((item) => {
            return item.name.toLowerCase().match(searchValue.toLowerCase())}))
        }
        else {
          searchItemCallback(initialList)
        }
    }, [searchValue, searchItemCallback])

    return ( <TextField id="searchBox" label="Search field" type="search" value={searchValue} onChange={(event) => { setSearchValue(event.target.value)}} sx={searchStyle}/>)
}



    export default SearchComponent
