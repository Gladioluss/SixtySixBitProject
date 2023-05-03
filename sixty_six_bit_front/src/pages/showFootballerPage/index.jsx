import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export default function ShowFootballer() {
    const [response, setResponse] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/api/footballer/showFootballer`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log("OK");
                    return Promise.all([response.json(), response.headers]);
                }

            })
            .then((response) => {
                console.log(response['0'])
                setResponse(response['0'])
            });

    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">firstName</TableCell>
                        <TableCell align="center">lastName</TableCell>
                        <TableCell align="center">gender</TableCell>
                        <TableCell align="center">birthDate</TableCell>
                        <TableCell align="center">teamName</TableCell>
                        <TableCell align="center">footballerCountry</TableCell>
                        <TableCell align="center">Изменить</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {response.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row.firstName}</TableCell>
                            <TableCell align="center">{row.lastName}</TableCell>
                            <TableCell align="center">{row.gender}</TableCell>
                            <TableCell align="center">{row.birthDate}</TableCell>
                            <TableCell align="center">{row.teamName}</TableCell>
                            <TableCell align="center">{row.footballerCountry}</TableCell>
                            <TableCell align="center">{
                                <Link to="/changeFootballer"
                                      state={{ id: row.id,
                                           firstNameOld: row.firstName,
                                           lastNameOld: row.lastName,
                                           genderOld: row.gender,
                                           birthDateOld: row.birthDate,
                                           teamNameOld: row.teamName,
                                           footballerCountryOld: row.footballerCountry
                                      }}
                                >Изменть</Link>
                            }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}