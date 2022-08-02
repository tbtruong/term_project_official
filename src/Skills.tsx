import * as React from 'react';
import ResponsiveAppBar from './Components/AppBar'
import SearchComponent from './Components/SearchComponent'
import CardComponent from './Components/CardComponent'
import CartComponent from './Components/CartComponent'
import { Box } from '@mui/material';
import initialList from './mockJson.json'


export interface skillCardsInterface {
  name: string; 
  image: string;
}

const pageLevelStyling = {
  display: "flex",
  flexDirection: "column"
}

const splitStyling = {
  display: "flex",
  flexDirection: "horizontal"
}

const leftLevelStyling = {
  width: "75%"
}

const rightLevelStyling = {
  width: "25%",
  display: "flex"
}

const searchItemStyling = {
  display: "flex",
  flexDirection: "horizontal",
  flexWrap: "wrap",
  marginTop: "1rem",
  gap: "2rem",
  rowGap: "2rem"
}

const SkillItemStyling = {
  flexGrow: 1
}

export const Resume: React.FC = () =>{

    const [searchItems, setSearchItem] = React.useState<skillCardsInterface[]>(initialList) 
    const [skillList, setSkillList] = React.useState<skillCardsInterface[]>([]) 
    function setSearchItemCallback (items: skillCardsInterface[]) {
      setSearchItem(items)
    }

    function setSkillListCallback (item: skillCardsInterface) {
      if (!skillList.includes(item)) {
        setSkillList(prevState => [...prevState, item])
      }
    }

    function setSkillListDeleteCallback (item: skillCardsInterface) {
      const index = skillList.indexOf(item);
      if (index > -1) {
        setSkillList( (prevState) => { 
        const tempArray = [...prevState]
        tempArray.splice(index,1)
        return tempArray
      })
      }
    }

    return (
      <Box className="App" sx={pageLevelStyling}>
        <ResponsiveAppBar/>
        <Box className="SplitSection" sx={splitStyling}>
        <Box className="leftSection" sx={leftLevelStyling}>
          <SearchComponent searchItemCallback={setSearchItemCallback}/>
          <Box className="searchItems" sx={searchItemStyling}>
            {searchItems.length > 0 && (searchItems.map((item) => (<CardComponent key={item.name} product={item} skillListCallback={setSkillListCallback}/>)))}
          </Box>
        </Box>
          <Box className="rightSection" sx={rightLevelStyling}>
          <CartComponent skillList={skillList} searchItemCallback={setSkillListDeleteCallback}/>
        </Box>
        </Box>
      </Box>
    );



  }

export default Resume;
