import React from 'react'
import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
 const List = () => {
  
  const rows = [
    {
        id: 589320,
        user: "John Spartan",
        Nickname: "117",
        img: "https://images.pexels.com/photos/6335962/pexels-photo-6335962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Location: "Eridanus 2",
        LogDate: "7 March 2511",
        status : "Active"
    },
    {
        id: 920369,
        user: "Kratos of Sparta",
        Nickname: "Ghost of Sparta",
        img: "https://m.media-amazon.com/images/I/51qDbPazM0L._AC_SL1000_.jpg",
        Location: "Midgard",
        LogDate: "-- --  --",
        status : "Active"
    },
    {
        id: 202986,
        user: "Jonathan Joestar",
        Nickname: "JOJO",
        img: "https://m.media-amazon.com/images/I/51qtudWzTzL._AC_SL1000_.jpg",
        Location: "Orc Street",
        LogDate: "6 May 1895",
        status : "Inactive"
    },
    {
        id: 584962,
        user: "John James",
        Nickname: "Rambo",
        img: "https://images.pexels.com/photos/876344/pexels-photo-876344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       Location: "Bowie Arizona",
        LogDate: "6 July 1945",
        status : "Active"
    }
  ]  

  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
            <TableCell className='tableCell'>Id</TableCell>
            <TableCell className='tableCell'>User</TableCell>
            <TableCell className='tableCell'>Nickname</TableCell>
            <TableCell className='tableCell'>User Photo</TableCell>
            <TableCell className='tableCell'>Login Date</TableCell>
            <TableCell className='tableCell'>Location</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          
           </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            >
            <TableCell>
              {row.id}
            </TableCell>
            <TableCell clasName="tableCell">
                <div className="cellWraper">
                    <img src={row.img} alt="" className='image'/>
                </div>
            </TableCell>
            <TableCell clasName="tableCell">{row.user}</TableCell>
            <TableCell clasName="tableCell">{row.Nickname}</TableCell>
            <TableCell clasName="tableCell">{row.LogDate}</TableCell>
            <TableCell clasName="tableCell">{row.Location}</TableCell>
            <TableCell clasName="tableCell">
                <span className={`status ${row.status}`} >{row.status}

                </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List