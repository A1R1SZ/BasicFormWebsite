import { TextField ,FormControl,RadioGroup,FormLabel,FormControlLabel ,Radio ,Button} from "@mui/material"
import { useState } from "react";

export default function FormSections({setData}){
    
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const[address,setAddress]=useState("");
    const[contactNo,setContactSet]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");

    const handleSubmit=()=>{
        console.log(name,email,address,contactNo,age,gender)
        const date={name,email,address,contactNo,age,gender}
        setData((ls)=>[...ls,date])
        console.log(date);
        setName("")
        setEmail("")
        setAddress("")
        setContactSet("")
        setAge("")
        setGender("")
    }

return(
    <>
    <TextField variant='outlined' name='name' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} color='secondary' sx={{width:'40%', margin:'25px'}}/>
    <TextField variant='outlined' name='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} color='secondary' sx={{width:'40%' ,margin:'25px'}}/>
    <TextField variant='outlined' name='address' placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)} color='secondary' sx={{width:'40%' ,margin:'25px'}}/>
    <TextField variant='outlined' name='contactNo' placeholder='ContactNo' value={contactNo} onChange={(e)=>setContactSet(e.target.value)} color='secondary' sx={{width:'40%' ,margin:'25px'}}/>
    <TextField variant='outlined' name='age' placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)} color='secondary' sx={{width:'40%' ,margin:'25px'}}/>
    <FormControl>
      <FormLabel id="gender-radio">Gender</FormLabel>
      <RadioGroup name='radio-button-group' onChange={(e)=>setGender(e.target.value)} row>
        <FormControlLabel value={"female"} control={<Radio />} label="Female" />
        <FormControlLabel value={"male"} control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
    <br/>
    <Button variant='contained' onClick={()=>{handleSubmit()}}>Add To List</Button>
</>
)
}