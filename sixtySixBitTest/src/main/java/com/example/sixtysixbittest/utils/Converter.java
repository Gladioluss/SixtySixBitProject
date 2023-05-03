package com.example.sixtysixbittest.utils;

import com.example.sixtysixbittest.dto.FootballerDto;
import com.example.sixtysixbittest.entities.FootballerEntity;

public class Converter {
    public FootballerEntity dtoToEntity(FootballerDto footballerDto){
        var entity = new FootballerEntity();
        entity.setFirstName(footballerDto.getFirstName());
        entity.setLastName(footballerDto.getLastName());
        entity.setGender(footballerDto.getGender());
        entity.setBirthDate(footballerDto.getBirthDate());
        entity.setTeamName(footballerDto.getTeamName());
        entity.setFootballerCountry(footballerDto.getFootballerCountry());
        return entity;
    }

    public void entityToDto(){

    }
}
