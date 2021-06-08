
--A few things to not for the planet creation. One is that a determined rebel base is never set. Also Loyalty is set based on first game setup-->
delete from Planet;

-- System One
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Yavin', 1, null, true, 0, 0, 0,
                    0, 0, 0, false, 0);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Felucia', 1, 'N', false, 1, 0, 0,
                    0, 0, 0, true, 1);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Mon Calamari', 1, 'N', false, 0, 0, 0,
                    1, 0, 1, false, 3);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Saleucami', 1, 'I', false, 0, 1, 0,
                    0, 0, 0, true, 1);

-- System Two
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Kessel', 2, 'N', false, 1, 0, 0,
                    0, 0, 0, true, 1);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Nal Hutta', 2, 'N', false, 1, 0, 0,
                    1, 0, 0, true, 1);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Toydaria', 2, 'N', false, 0, 0, 0,
                    0, 1, 0, false, 2);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Bothawui', 2, 'R', false, 0, 1, 0,
                    0, 0, 0, true, 1);

-- System Three
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Tatooine', 3, null, true, 0, 0, 0,
                    0, 0, 0, false, 0);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Ryloth', 3, 'N', false, 1, 0, 0,
                    0, 0, 0, true, 1);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Geonosis', 3, 'N', false, 0, 0, 1,
                    1, 0, 0, false, 2);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Rodia', 3, 'N', false, 1, 0, 0,
                    0, 0, 0, true, 1);

-- System Four
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Dathomir', 4, null, true, 0, 0, 0,
                    0, 0, 0, false, 0);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Mandalore', 4, 'I', false, 1, 0, 0,
                    1, 0, 0, true, 1);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Kashyyyk', 4, 'R', false, 2, 0, 0,
                    0, 0, 0, true, 1);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Malastare', 4, 'N', false, 1, 0, 0,
                    0, 0, 0, true, 1);

-- System Five
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Utapau', 5, 'N', false, 0, 0, 0,
                    0, 1, 1, false, 3);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Naboo', 5, 'R', false, 1, 0, 0,
                    1, 0, 0, true, 1);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Sullust', 5, 'I', false, 1, 0, 1,
                    0, 0, 0, true, 2);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Dagobah', 5, null, true, 0, 0, 0,
                    0, 0, 0, false, 0);

-- System Six
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Dantooine', 6, null, true, 0, 0, 0,
                    0, 0, 0, false, 0);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Mygeeto', 6, 'N', false, 0, 0, 1,
                    1, 0, 0, false, 2);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Ilum', 6, null, true, 0, 0, 0,
                    0, 0, 0, false, 0);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Ord Mantell', 6, 'N', false, 0, 1, 0,
                    0, 1, 0, true, 2);

-- System Seven
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Alderaan', 7, 'N', false, 1, 0, 0,
                    0, 0, 0, true, 1);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Cato Neimoidia', 7, 'N', false, 0, 1, 0,
                    1, 0, 0, false, 2);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Coruscant', 7, 'I', false, 1, 0, 0,
                    0, 0, 0, true, 1);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Corellia', 7, 'I', false, 0, 0, 0,
                    1, 0, 1, false, 3);

-- System Eight
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Endor', 8, null, true, 0, 0, 0,
                    0, 0, 0, false, 0);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Bespin', 8, 'N', false, 0, 1, 0,
                    0, 0, 0, true, 1);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Mustafar', 8, 'I', false, 0, 0, 0,
                    1, 1, 0, false, 2);
insert into Planet (name, region_id, loyalty, remote, light_land_production, med_land_production, heavy_land_production,
                    light_space_production, med_space_production, heavy_space_production, land_production_first, queue_time)
                    values ('Hoth', 8, null, true, 0, 0, 0,
                    0, 0, 0, false, 0);