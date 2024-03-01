import React, { useState } from 'react'
import './App.css';
import { Box, Button, Tab, TableContainer, TextField ,Paper, Table, TableHead, TableRow, TableCell, TableBody ,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel } from '@mui/material';
import { TabList,TabPanel,TabContext } from '@mui/lab';

function App() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const[address,setAddress]=useState("");
  const[contactNo,setContactSet]=useState("");
  const[age,setAge]=useState("");
  const[gender,setGender]=useState("");
  const [list,setList]=useState([]);
  const[value,setValue]=React.useState('1');
  
  const handleTabChange = (event,newValue)=>{
    setValue(newValue);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,email,address,contactNo,age,gender)
    const date={name,email,address,contactNo,age,gender}
    if(name&&email&&address&&contactNo&&age&&gender){
      setList((ls)=>[...ls,date])
      setName("")
      setEmail("")
      setAddress("")
      setContactSet("")
      setAge("")
      setGender("")
    }
  }
  return (
    <Box className="App">
      <TabContext value={value}>
      <Box sx={{borderBottom:1,borderColor:'purple'}}>
        <TabList onChange={handleTabChange} centered textColor='secondary'>
          <Tab label='Form' value={'1'}/>
          <Tab label="Table" value={'2'}/>
        </TabList>
      </Box>
      <TabPanel value='1' sx={{display:'block'}}>
        <TextField variant='outlined' name='name' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} color='secondary' sx={{width:'40%', margin:'25px'}}/>
        <TextField variant='outlined' name='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} color='secondary' sx={{width:'40%' ,margin:'25px'}}/>
        <TextField variant='outlined' name='address' placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)} color='secondary' sx={{width:'40%' ,margin:'25px'}}/>
        <TextField variant='outlined' name='contactNo' placeholder='ContactNo' value={contactNo} onChange={(e)=>setContactSet(e.target.value)} color='secondary' sx={{width:'40%' ,margin:'25px'}}/>
        <TextField variant='outlined' name='age' placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)} color='secondary' sx={{width:'40%' ,margin:'25px'}}/>
        {/* <TextField variant='outlined' name='gender' placeholder='Gender' value={gender} onChange={(e)=>setGender(e.target.value)} color='secondary' sx={{width:'40%' ,margin:'25px'}}/> */}
        <FormControl>
          <FormLabel id="gender-radio">Gender</FormLabel>
          <RadioGroup name='radio-button-group' onChange={(e)=>setGender(e.target.value)} row>
            <FormControlLabel value={"female"} control={<Radio />} label="Female" />
            <FormControlLabel value={"male"} control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <br/>
        <Button variant='contained' onClick={handleSubmit}>Add To List</Button>
      </TabPanel>
      <TabPanel value='2'>
          <TableContainer component={Paper}>
          <Table sx={{minWidth:700}}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='right'>Email</TableCell>
                <TableCell align='right'>Address</TableCell>
                <TableCell align='right'>ContactNo.</TableCell>
                <TableCell align='right'>Age</TableCell>
                <TableCell align='right'>Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((lists)=>(
                <TableRow key={lists.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope='lists'>
                  {lists.name}
                </TableCell>
                <TableCell align='right'>{lists.email}</TableCell>
                <TableCell align='right'>{lists.address}</TableCell>
                <TableCell align='right'>{lists.contactNo}</TableCell>
                <TableCell align='right'>{lists.age}</TableCell>
                <TableCell align='right'>{lists.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
     </TabContext>
    </Box>
  );
}

export default App;
