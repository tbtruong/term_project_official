import { TextField } from '@mui/material';
import * as React from 'react';
import axios from 'axios';
import { EventAvailableOutlined } from '@mui/icons-material';
import { skillCardsInterface} from '../Skills'
import initialList from '../mockJson.json'

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
        
        // console.log(searchValue)
        if (searchValue != '') {
          // console.log(searchValue)
          // Send Axios request here
          // console.log('useEffect')
          // console.log(mockJson)
          searchItemCallback(initialList.filter((item) => {
            return item.name.toLowerCase().match(searchValue.toLowerCase())}))
        }
        else {
          searchItemCallback(initialList)
        }
    }, [searchValue])

    return ( <TextField id="searchBox" label="Search field" type="search" value={searchValue} onChange={(event) => { setSearchValue(event.target.value)}} sx={searchStyle}/>)
}



    export default SearchComponent
