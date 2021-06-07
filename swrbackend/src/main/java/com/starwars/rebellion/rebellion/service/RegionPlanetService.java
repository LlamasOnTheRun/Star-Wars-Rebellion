package com.starwars.rebellion.rebellion.service;

import com.starwars.rebellion.rebellion.model.RegionsWithPlanets;
import com.starwars.rebellion.rebellion.repositories.RegionPlanetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegionPlanetService {
    @Autowired
    private RegionPlanetRepository regionPlanetRepository;

    public List<RegionsWithPlanets> retrieveAllRegionInfo() {
        return regionPlanetRepository.findAll();
    }
}
