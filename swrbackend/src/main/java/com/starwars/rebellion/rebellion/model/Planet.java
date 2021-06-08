package com.starwars.rebellion.rebellion.model;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name="Planet")
@DiscriminatorColumn(
        name="discriminator",
        discriminatorType=DiscriminatorType.STRING
)
@DiscriminatorValue(value="P" )
public class Planet implements Serializable {
    @Id
    private String name; // name of the planet

    @Column
    private String region_id;

    @Column
    private String loyalty; // S = Subjugated, I = Imperial, R = Rebel, N = Neutral, Null = Remote
    @Column
    private boolean remote; // if the system is remote/has no production

    @Column(name="light_land_production")
    private int lightLandProduction; // hold light units land
    @Column(name="med_land_production")
    private int medLandProduction; // hold light units land
    @Column(name="heavy_land_production")
    private int heavyLandProduction; // hold heavy land units

    @Column(name="light_space_production")
    private int lightSpaceProduction; // hold light space units
    @Column(name="med_space_production")
    private int medSpaceProduction; // hold light units land
    @Column(name="heavy_space_production")
    private int heavySpaceProduction; // hold heavy space units

    @Column(name="land_production_first")
    private boolean landProductionFirst;

    @Column(name="queue_time")
    private int queueTime; // holds the queue time for the production

    @Value("false")
    @Transient
    private boolean destroyed; // will be used to decide if the planet exploded or not

    @Value("false")
    @Transient
    private boolean rebelBase;

    @Transient
    @Value("false")
    private boolean sabotage;
}
