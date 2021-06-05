package com.starwars.rebellion.rebellion.repositories;

import com.starwars.rebellion.rebellion.model.Leader;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeaderRepository extends CrudRepository<Leader, String> {
    List<Leader> findAll();
}
