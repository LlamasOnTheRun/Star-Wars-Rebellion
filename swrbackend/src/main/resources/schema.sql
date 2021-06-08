create table if not exists Planet (
    name varchar(25) PRIMARY KEY not null,
    region_id int not null,
    loyalty varchar(25),
    remote BOOLEAN not null,
    light_land_production int not null,
    med_land_production int not null,
    heavy_land_production int not null,
    light_space_production int not null,
    med_space_production int not null,
    heavy_space_production int not null,
    land_production_first BOOLEAN not null,
    queue_time int not null,
    discriminator varchar(25)
);

--create table if not exists System (
--    system_id int PRIMARY KEY not null
--);

create table if not exists Leader (
    name varchar(25) PRIMARY KEY not null,
    intel int not null,
    power int not null,
    logistic int not null,
    diplomacy int not null,
    starting_leader BOOLEAN not null,
    general BOOLEAN not null,
    admiral BOOLEAN not null,
    space_tactic_draw int not null,
    ground_tactic_draw int not null,
    faction varchar(25) not null
);

create table if not exists Mission (
    mission_id int IDENTITY(1,1) PRIMARY KEY not null, -- pk for the id of the mission card
    LeaderBonusName varchar(25), --this will store the bonus for the leader for the mission. I have to Create the leader schema first before anything else
    mission_name varchar(30), -- will hold the mission name for the card
    mission_text varchar(500), -- will hold the text for ther card for the mission
    skill_type varchar(25) not null, -- will hold the skill needed in order to activate the card
    lowest_skill_needed int not null, -- a num to determine the min num of skill points to activate the card
    starting_card BOOLEAN not null, -- Will set if the card will return back to hand after played
    project_card BOOLEAN not null, -- Will determine if it is a project card, maing for the empire
    total_in_deck int not null, -- Total amount of cards for this specifit card
    faction varchar(25) not null, -- will hold the faction the mission card belongs to
    FOREIGN KEY(LeaderBonusName) REFERENCES Leader(name)
);