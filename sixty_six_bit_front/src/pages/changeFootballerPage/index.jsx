import {useEffect, useState} from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Link, useLocation} from "react-router-dom";
import * as React from "react";

export default function ShowFootballer() {

    const location = useLocation()
    const { id } = location.state
    const { firstNameOld } = location.state
    const { lastNameOld } = location.state
    const { genderOld } = location.state
    const { birthDateOld } = location.state
    const { teamNameOld } = location.state
    const { footballerCountryOld } = location.state
    const [firstName, setFirstName] = useState(firstNameOld)
    const [lastName,setLastName] = useState(lastNameOld)
    const [gender,setGender] = useState(genderOld)
    const [birthDate, setBirthDate] = useState(birthDateOld)
    const [teamName, setTeamName] = useState(teamNameOld)
    const [footballerCountry,setFootballerCountry] = useState(footballerCountryOld)
    const firstNameHandler = (e) =>{
        setFirstName(e.target.value)
    }

    const lastNameHandler = (e) =>{
        setLastName(e.target.value)
    }
    const genderHandler = (e) =>{
        setGender(e.target.value)
    }
    const birthDateHandler = (e) =>{
        setBirthDate(e.target.value)
    }
    const teamNameHandler = (e) =>{
        setTeamName(e.target.value)
    }
    const footballerCountryHandler = (e) =>{
        setFootballerCountry(e.target.value)
    }

    function changeFootballer(){
        const reqBody = {
            id: id,
            firstName : firstName,
            lastName: lastName,
            gender: gender,
            birthDate: birthDate,
            teamName: teamName,
            footballerCountry: footballerCountry
        }
        console.log(JSON.stringify(reqBody))
        fetch(`http://localhost:8080/api/footballer/changeFootballer`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(reqBody)
        })
            .then((response) => {
                window.location.href = "/showFootballer"
            });
    }
    return (
        <>
            <div>
                <h1>Изменить футболлиста</h1>
                <div>
                    <h2>Имя</h2>
                    <div>
                        <input
                            id="firstName"
                            name = 'firstName'
                            value = {firstName}
                            onChange ={e => firstNameHandler(e)}
                        />
                    </div>
                    <h2>Фамилия</h2>
                    <input
                        id="lastName"
                        name = 'lastName'
                        value = {lastName}
                        onChange ={e => lastNameHandler(e)}
                    />
                    <h2>Пол</h2>
                    <input
                        type="radio"
                        name="gender"
                        value="Мужской"
                        id="genderM"
                        onChange={e => genderHandler(e)}
                    />
                    <label htmlFor="male">Мужчина</label>

                    <input
                        type="radio"
                        name="gender"
                        value="Женский"
                        id="genderF"
                        onChange={e => genderHandler(e)}
                    />
                    <label htmlFor="female">Женщина</label>
                    <h2>Дата рождения</h2>
                    <input
                        id="birthDate"
                        name = 'birthDate'
                        value = {birthDate}
                        onChange ={e => birthDateHandler(e)}
                    />
                    <h2>Название команды</h2>
                    <input
                        id="teamName"
                        name = 'teamName'
                        value = {teamName}
                        onChange ={e => teamNameHandler(e)}
                    />
                    <h3>Страна</h3>
                    {/*<input*/}
                    {/*    id="footballerCountry"*/}
                    {/*    name = 'footballerCountry'*/}
                    {/*    value = {footballerCountry}*/}
                    {/*    onChange ={e => footballerCountryHandler(e)}*/}
                    {/*/>*/}
                    <input
                        type="radio"
                        name="footballerCountry"
                        value="Россия"
                        id="Russia"
                        onChange={e => footballerCountryHandler(e)}
                    />
                    <label htmlFor="regular">Россия</label>

                    <input
                        type="radio"
                        name="footballerCountry"
                        value="США"
                        id="USA"
                        onChange={e => footballerCountryHandler(e)}
                    />
                    <label htmlFor="medium">США</label>

                    <input
                        type="radio"
                        name="footballerCountry"
                        value="Италия"
                        id="Italy"
                        onChange={e => footballerCountryHandler(e)}
                    />
                    <label htmlFor="medium">Италия</label>

                    <div>
                        <button id="submit"  onClick={()=>changeFootballer()} type="button"> Изменить </button>
                    </div>
                </div>
            </div>
        </>
    );
}
