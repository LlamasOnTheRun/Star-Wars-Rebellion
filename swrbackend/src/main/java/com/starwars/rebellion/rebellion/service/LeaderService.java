package com.starwars.rebellion.rebellion.service;

import com.starwars.rebellion.rebellion.model.Leader;
import com.starwars.rebellion.rebellion.repositories.LeaderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeaderService {
    @Autowired
    private LeaderRepository leaderRepository;

    public List<Leader> retrieveAllLeaders() {
        return leaderRepository.findAll();
    }
}
