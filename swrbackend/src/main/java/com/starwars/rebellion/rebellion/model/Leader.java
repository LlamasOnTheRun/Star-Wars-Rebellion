package com.starwars.rebellion.rebellion.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="Leader")
@DiscriminatorColumn(
        name="discriminator",
        discriminatorType= DiscriminatorType.STRING)
public class Leader {
    @Id
    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "address_id", referencedColumnName = "id")
    private String name; // name of the leader

    @Column
    private int intel;
    @Column
    private int power;
    @Column
    private int logistic;
    @Column
    private int diplomacy;

    @Column
    private boolean starting_leader;
    @Column
    private boolean general;
    @Column
    private boolean admiral;

    @Column
    private int space_tactic_draw;
    @Column
    private int ground_tactic_draw;

    @Column
    private String faction;

}
