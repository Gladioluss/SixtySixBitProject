package com.example.sixtysixbittest.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "footballers")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FootballerEntity {

    @Id
    @Column(name = "footballer_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "first_name")
    String firstName;

    @Column(name = "last_name")
    String lastName;

    @Column(name = "gender")
    String gender;

    @Column(name = "birth_date")
    String birthDate;

    @Column(name = "team_name")
    String teamName;

    @Column(name = "footballer_country")
    String footballerCountry;

    @Override
    public String toString() {
        return "FootballerEntity{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", gender='" + gender + '\'' +
                ", birthDate='" + birthDate + '\'' +
                ", teamName='" + teamName + '\'' +
                ", footballerCountry='" + footballerCountry + '\'' +
                '}';
    }
}
