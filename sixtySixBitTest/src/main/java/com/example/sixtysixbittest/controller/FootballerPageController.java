package com.example.sixtysixbittest.controller;

import com.example.sixtysixbittest.dto.FootballerDto;
import com.example.sixtysixbittest.entities.FootballerEntity;
import com.example.sixtysixbittest.services.FootballerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/footballer")
public class FootballerPageController {
    public final FootballerService footballerService;

    public FootballerPageController(
            FootballerService footballerService) {
        this.footballerService = footballerService;

    }

    @PostMapping("/addFootballer")
    public void addFootballer(@RequestBody FootballerDto footballerDto) {
        footballerService.saveFootballer(footballerDto);
    }

    @GetMapping("/showFootballer")
    public ResponseEntity<List<FootballerEntity>> showFootballer() {
        return ResponseEntity.ok(footballerService.getAllFootballers());
    }

    @PostMapping("/changeFootballer")
    public void changeFootballer(@RequestBody FootballerDto footballerDto) {
        footballerService.changeFootballer(footballerDto);
    }
}
