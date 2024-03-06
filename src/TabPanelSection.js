import { TabContext, TabList, TabPanel} from '@mui/lab';
import React, { useState } from 'react'
import { Box,Tab} from '@mui/material';
import FormSections from './FormSection'
import TableSections from './TableSection';

function TabPaneling(){
    const[value,setValue]=React.useState('1');
    const handleTabChange = (event,newValue)=>{
        setValue(newValue);
    }
    const [data,setData] = useState('');
    return(    
        <TabContext value={value}>
            <Box sx={{borderBottom:1,borderColor:'purple'}}>
                <TabList onChange={handleTabChange} textColor='secondary' centered>
                    <Tab label='Form' value={'1'}/>
                    <Tab label="Table" value={'2'}/>    
                </TabList>
            </Box>
                <TabPanel value='1' sx={{display:'block'}}><FormSections setData={setData}/></TabPanel>
                <TabPanel value='2' sx={{display:'block'}}><TableSections data={data}/></TabPanel>
        </TabContext>)
}

export default TabPaneling;
