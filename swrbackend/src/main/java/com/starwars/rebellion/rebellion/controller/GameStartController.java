package com.starwars.rebellion.rebellion.controller;

import com.starwars.rebellion.rebellion.service.PlanetService;
import com.starwars.rebellion.rebellion.service.RegionPlanetService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Slf4j
@Controller
public class GameStartController {

    @Autowired
    private PlanetService planetService;
    @Autowired
    private RegionPlanetService regionPlanetService;

    @GetMapping("/getAllPlanets")
    @ResponseBody
    @CrossOrigin
    public String getAllPlanets() {
        return planetService.retrieveAllPlanets().toString();
    }

    @GetMapping("/getAllRegionsWithPlanets")
    @ResponseBody
    @CrossOrigin
    public String getAllSystemInfo() {
        return regionPlanetService.retrieveAllRegionInfo().toString();
    }
}
