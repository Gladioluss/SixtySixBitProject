package com.example.sixtysixbittest.services;

import com.example.sixtysixbittest.dto.FootballerDto;
import com.example.sixtysixbittest.entities.FootballerEntity;
import com.example.sixtysixbittest.repository.FootballerRepository;
import com.example.sixtysixbittest.utils.Converter;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FootballerService {
    public final FootballerRepository footballerRepository;

    public FootballerService(FootballerRepository footballerRepository) {
        this.footballerRepository = footballerRepository;
    }

    public void saveFootballer(FootballerDto footballerDto) {
        footballerRepository.save(new Converter().dtoToEntity(footballerDto));
    }

    public List<FootballerEntity> getAllFootballers(){
        return footballerRepository.findAll();
    }

    public void changeFootballer(FootballerDto footballerdto){
        FootballerEntity footballer = footballerRepository.findById(footballerdto.getId()).get();
        footballer.setFirstName(footballerdto.getFirstName());
        footballer.setLastName(footballerdto.getLastName());
        footballer.setGender(footballerdto.getGender());
        footballer.setBirthDate(footballerdto.getBirthDate());
        footballer.setTeamName(footballerdto.getTeamName());
        footballer.setFootballerCountry(footballerdto.getFootballerCountry());
        footballerRepository.save(footballer);
    }
}
