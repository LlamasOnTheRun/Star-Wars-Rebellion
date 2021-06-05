package com.starwars.rebellion.rebellion.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Vector;

@Entity
@Data
public class System {
    @Id
    private int planetID;
    private Vector planets = new Vector();

    public System(Vector planets) {
        this.planets = planets;
    }
}
