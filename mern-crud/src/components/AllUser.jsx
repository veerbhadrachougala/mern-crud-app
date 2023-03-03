import React from 'react'
import { useEffect, useState } from 'react'

import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'

import { getUser } from '../service/api'


const AllUser = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUser();
  },[]);

  const getAllUser = async () => {
    let response = await getUser();
    setUsers(response.data);
    // console.log(response)
  };

  return (
    <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
              {
                users.map( user => {
                  return <TableRow key={user._id}>
                            <TableCell>{user.fullname}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phonenumber}</TableCell>
                          </TableRow>
                })              
              }
          </TableBody>

        </Table>
    </div>
  )
}

export default AllUser