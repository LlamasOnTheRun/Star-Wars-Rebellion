package com.starwars.rebellion.rebellion.repositories;

import com.starwars.rebellion.rebellion.model.RegionsWithPlanets;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegionPlanetRepository extends CrudRepository<RegionsWithPlanets, String> {
    List<RegionsWithPlanets> findAll();
}