import {useState} from "react";

const ChangeFootballer = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [gender,setGender] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [teamName, setTeamName] = useState("")
    const [footballerCountry,setFootballerCountry] = useState("")

    function addFootballer(){
        const reqBody = {
            firstName : firstName,
            lastName: lastName,
            gender: gender,
            birthDate: birthDate,
            teamName: teamName,
            footballerCountry: footballerCountry
        }
        console.log(JSON.stringify(reqBody))
        fetch(`http://localhost:8080/api/footballer/addFootballer`, {
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

    return (
        <>
            <div>
                <h1>Добавить футболлиста</h1>
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
                    <label htmlFor="regular">Мужчина</label>

                    <input
                        type="radio"
                        name="gender"
                        value="Женский"
                        id="genderF"
                        onChange={e => genderHandler(e)}
                    />
                    <label htmlFor="medium">Женщина</label>
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
                        <button id="submit"  onClick={()=>addFootballer()} type="button"> Добавить </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChangeFootballer;
