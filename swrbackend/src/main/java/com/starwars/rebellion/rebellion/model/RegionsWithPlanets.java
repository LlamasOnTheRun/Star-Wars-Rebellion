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
    @Id/*TODO this will have to change, it is now the id. This is a One To Many relationshop. Not sure how to set up so I need to change this in future*/
    private String planet_name;
}
