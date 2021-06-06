package com.starwars.rebellion.rebellion.service;

import com.starwars.rebellion.rebellion.model.Planet;
import com.starwars.rebellion.rebellion.repositories.PlanetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanetService {
    private PlanetRepository planetRepository;

    @Autowired
    public PlanetService(PlanetRepository planetRepository) {
        this.planetRepository = planetRepository;
    }

    public List<Planet> retrieveAllPlanets() {
        return planetRepository.findAll();
    }
}
