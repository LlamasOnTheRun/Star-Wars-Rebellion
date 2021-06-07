package com.starwars.rebellion.rebellion.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@DiscriminatorColumn(
        name="discriminator",
        discriminatorType= DiscriminatorType.STRING
)
public class RegionsWithPlanets implements Serializable {
    @Column
    private int region_id;
    @Id
    private String planet_name;
}
