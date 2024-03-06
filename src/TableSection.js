import { TableContainer,Table,TableRow,TableBody,TableCell,TableHead,Paper } from "@mui/material"

export default function TableSections ({data}){
    console.log(data);

    return(
        <>
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
            {data && data.map && data.map((lists)=>(
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
    </>
    )
}