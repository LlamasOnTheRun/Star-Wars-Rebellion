package com.starwars.rebellion.rebellion.repositories;

import com.starwars.rebellion.rebellion.model.Planet;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanetRepository extends CrudRepository<Planet, String> {
    List<Planet> findAll();
}
