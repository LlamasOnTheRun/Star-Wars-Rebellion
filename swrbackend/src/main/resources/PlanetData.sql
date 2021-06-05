
--A few things to not for the planet creation. One is that a determined rebel base is never set. Also Loyalty is set based on first game setup-->
delete from Planet;

-- System One
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Yavin', null, true, 0, 0, 0,
                    0, 0, 0, false, 0);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Felucia', 'N', false, 1, 0, 0,
                    0, 0, 0, true, 1);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Mon Calamari', 'N', false, 0, 0, 0,
                    1, 0, 1, false, 3);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Saleucami', 'I', false, 0, 1, 0,
                    0, 0, 0, true, 1);

-- System Two
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Kessel', 'N', false, 1, 0, 0,
                    0, 0, 0, true, 1);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Nal Hutta', 'N', false, 1, 0, 0,
                    1, 0, 0, true, 1);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Toydaria', 'N', false, 0, 0, 0,
                    0, 1, 0, false, 2);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Bothawui', 'R', false, 0, 1, 0,
                    0, 0, 0, true, 1);

-- System Three
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Tatooine', null, true, 0, 0, 0,
                    0, 0, 0, false, 0);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Ryloth', 'N', false, 1, 0, 0,
                    0, 0, 0, true, 1);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Geonosis', 'N', false, 0, 0, 1,
                    1, 0, 0, false, 2);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Rodia', 'N', false, 1, 0, 0,
                    0, 0, 0, true, 1);

-- System Four
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Dathomir', null, true, 0, 0, 0,
                    0, 0, 0, false, 0);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Mandalore', 'I', false, 1, 0, 0,
                    1, 0, 0, true, 1);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Kashyyyk', 'R', false, 2, 0, 0,
                    0, 0, 0, true, 1);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Malastare', 'N', false, 1, 0, 0,
                    0, 0, 0, true, 1);

-- System Five
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Utapau', 'N', false, 0, 0, 0,
                    0, 1, 1, false, 3);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Naboo', 'R', false, 1, 0, 0,
                    1, 0, 0, true, 1);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Sullust', 'I', false, 1, 0, 1,
                    0, 0, 0, true, 2);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Dagobah', null, true, 0, 0, 0,
                    0, 0, 0, false, 0);

-- System Six
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Dantooine', null, true, 0, 0, 0,
                    0, 0, 0, false, 0);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Mygeeto', 'N', false, 0, 0, 1,
                    1, 0, 0, false, 2);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Ilum', null, true, 0, 0, 0,
                    0, 0, 0, false, 0);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Ord Mantell', 'N', false, 0, 1, 0,
                    0, 1, 0, true, 2);

-- System Seven
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Alderaan', 'N', false, 1, 0, 0,
                    0, 0, 0, true, 1);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Cato Neimoidia', 'N', false, 0, 1, 0,
                    1, 0, 0, false, 2);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Coruscant', 'I', false, 1, 0, 0,
                    0, 0, 0, true, 1);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Corellia', 'I', false, 0, 0, 0,
                    1, 0, 1, false, 3);

-- System Eight
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Endor', null, true, 0, 0, 0,
                    0, 0, 0, false, 0);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Bespin', 'N', false, 0, 1, 0,
                    0, 0, 0, true, 1);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Mustafar', 'I', false, 0, 0, 0,
                    1, 1, 0, false, 2);
insert into Planet (name, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Hoth', null, true, 0, 0, 0,
                    0, 0, 0, false, 0);