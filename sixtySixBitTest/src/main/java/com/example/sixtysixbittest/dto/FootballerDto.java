package com.example.sixtysixbittest.dto;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@Builder
public class FootballerDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String gender;
    private String birthDate;
    private String teamName;
    private String footballerCountry;

    public FootballerDto() {
    }

    public FootballerDto(Long id, String firstName, String lastName, String gender, String birthDate, String teamName, String footballerCountry) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthDate = birthDate;
        this.teamName = teamName;
        this.footballerCountry = footballerCountry;
    }
}
