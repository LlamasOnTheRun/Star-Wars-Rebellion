package com.starwars.rebellion.rebellion.controller;

import com.starwars.rebellion.rebellion.service.LeaderService;
import com.starwars.rebellion.rebellion.service.PlanetService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Slf4j
@Controller
public class GameStartController {

    @Autowired
    private PlanetService planetService;
    @Autowired
    private LeaderService leaderService;

    @RequestMapping("/test")
    @ResponseBody
    public String testFuction() {
        log.info("Hey, you called my function");
        //Planet tes1t = new Planet("Yavin", "Rebel", true, 1, 1, 0, 0);
        //log.info(tes1t.getLoyalty());
        log.info(planetService.retrieveAllPlanets().toString());
        log.info(leaderService.retrieveAllLeaders().toString());
        return planetService.retrieveAllPlanets().toString();
    }
}
