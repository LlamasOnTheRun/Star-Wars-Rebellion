package com.starwars.rebellion.rebellion.controller;

import com.starwars.rebellion.rebellion.model.Planet;
import com.starwars.rebellion.rebellion.service.PlanetService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
public class GameStartController {

    @Autowired
    private PlanetService planetService;

    @GetMapping(path = "/getAllPlanets")
    @CrossOrigin
    public List<Planet> getAllPlanets() {
        return planetService.retrieveAllPlanets();
    }
}
