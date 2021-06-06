delete from Mission;

insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values ('Chewbacca', 'WOOKIEE UPRISING', 'Attempt in the Kashyyyk system. </br></br>If successful, gain 1 loyalty in this </br>system and destroy up to 4-health worth </br>of units of your choice in this system.',
                     'P', 3, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values (null, 'DEMOLITION', 'Attempt in any Imperial system. </br></br>If successful, for each of this system''s </br>resource icons, destroy 1 unit on the </br>build queue that matches the icon.',
                     'P', 3, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values ('Han Solo', 'LEAD THE </br>STRIKE TEAM', 'Attempt in any system. </br></br>If successful, move up to 4 ground </br>units from the "Rebel Base" space </br>to this system, ignoring transport </br>restrictions and adjacency. </br></br>If there are Imperial ground units in </br>this system, resolve a combat.',
                     'P', 2, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values ('General Rieekan', 'BASE DEFENSES', 'Attempt in any Rebel system. </br></br>If successful, gain 1 Ion Cannon </br>and 1 Shield Generator in the </br>"Rebel Base" space.',
                     'D', 1, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values (null, 'PUBLIC UPRISING', 'Attempt in any subjugated system. </br></br>If successful, gain 1 (circle) and 2 (triangle) units </br>(ships and/or ground units) in the </br>system. Then resolve a combat.',
                     'D', 3, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values ('Lando Calrissian', 'CONTINGENCY PLAN', 'Assign this leader to a starting mission </br>from your hand, even one that was </br>already attempted or resolved this round. </br></br>If Lando Calrissian was assigned to </br>this mission, he gains 2 additional </br>successes when he attempts a </br>mission later this round.',
                     'L', 1, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values ('Mon Mothma', 'ESTABLISH TRADE </br>RELATIONS', 'Attempt in any system that does </br>not contain a sabotage marker. </br></br>If successful, gain 1 loyalty in the </br>system and place units on the build </br>queue using this system''s resource </br>icons and number.',
                     'D', 3, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values ('Jan Dodonna', 'PLAN THE ASSAULT', 'Attempt in any system that </br>contains an Imperial ship. </br></br>If successful, move ships(but not ground </br>units) from the "Rebel Base" space to </br>this system as if they were adjacent. </br>Leaders in the "Rebel Base" space </br>do not prevent this movement. </br>Then Resolve a combat in this system.',
                     'I', 2, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values (null, 'HIT AND RUN', 'Attempt in any system. </br></br>If successful, destroy up to 2-health worth </br>of units of your choice in this system.',
                     'P', 2, false, false,
                     2, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values (null, 'INCITE REBELLION', 'Attempt in any subjugated system. </br></br>If successful, gain 3 Rebel Troopers </br>in this system. Then resolve a combat.',
                     'D', 2, false, false,
                     2, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values (null, 'HIDDEN FLEET', 'Resolve in any system that does not </br>contain an Imperial unit. </br></br>Move units from the "Rebel Base" space </br>to this system as if they were adjacent. </br>Leaders in the "Rebel Base" space do </br>not prevent this movement.',
                     'L', 1, false, false,
                     3, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values ('Luke Skywalker', 'SEEK YODA', 'Resolve in the Dagobah system. </br></br>Attach the Master Yoda ring to this leader. </br>Once per game round, when this leader </br>is in the same system as mission or </br>combat, you may reroll 1 of your dice. </br></br>If Luke Skywalker resolves this </br>mission, also replace his leader </br>with Luke Skywalker (Jedi).',
                     'I', 1, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values ('Princess Leia', 'STOLEN PLANS', 'Attempt in any system that </br>contains an Imperial unit. </br></br>If successful, look at the top 4 cards of </br>the objective deck. Place those cards </br>on top of the deck in any order.',
                     'I', 2, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values ('Wedge Antilles', 'ROUGE </br>SQUADRON RAID', 'Attempt in any Imperial system. </br></br>If successful, destroy up to 4-health worth </br>of units of your choice on the build queue.',
                     'P', 2, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values ('Admiral Ackbar', 'SUPPORT OF </br>MON CALAMARI', 'Attempt in the Mon Calamari system. </br></br>If successful, either gain 2 loyalty in this </br>system or place 1 Mon Calamari Cruiser </br>on space 3 on the build queue.',
                     'D', 2, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values ('Obi-Wan Kenobi', 'FOR THE </br>GREATER GOOD', 'Attempt in any system that </br>contains a captured leader. </br></br>If successful, rescue that leader and </br>draw 1 objective card. The leader(s) </br>assigned to this mission remain in </br>this system.',
                     'I', 3, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values ('General Madine', 'MISDIRECTION', 'Attempt in any system that </br>contains an Imperial unit. </br></br>If successful, choose 1 of your leaders. </br>Imperial leaders in the leader pool. </br>cannot be sent to oppose that </br>leader''s mission this round.',
                     'P', 1, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values (null, 'COVERT OPERATION', 'Attempt in any system that </br>contains Imperial units. </br></br>If successful, draw 2 objective cards. </br>Choose 1 to keep and place the </br>other on the bottom of the deck.',
                     'I', 3, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values (null, 'PLANT FALSE LEAD', 'Resolve in any system that contains </br>an Imperial unit. </br></br>Randomly take 4 of the Imperial </br>player''s probe cards. Place these </br>cards on the top and/or bottom of the </br>deck in any order without showing </br>them to the Imperial player.',
                     'L', 1, false, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values (null, 'INFILTRATION', 'Attempt in any system that </br>contains an Imperial unit. </br></br>If successful, look at the top 2 cards </br>of the objective deck. Place 1 card on </br>the top of the deck and the other card </br>on the bottom.',
                     'I', 1, true, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values (null, 'RAPID MOBILIZATION', 'Resolve in the "Rebel Base" space. At the </br>end of this phase, choose 1 of the following: </br></br>If the Rebel base is not revealed, </br>move up to 5 units from 1 system to the </br>"Rebel Base" space, ignoring adjacency. </br></br>Establish a new Rebel base. If 2 </br>leaders are assigned to this mission, </br>draw 8 probe cards instead of 4.',
                     'L', 1, true, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values (null, 'SABOTAGE', 'Attempt in any populous system. </br></br>If successful, place a sabotage marker </br>in this system. This marker prevents </br>players from building units from and </br>deploying units in this system.',
                     'P', 1, true, false,
                     1, 'R');
insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values (null, 'BUILD ALLIANCE', 'Attempt in any populous system. </br>If there are Rebel units in this </br>system, roll 2 additional dice. </br></br>If successful, gain 1 loyalty in this system.',
                     'D', 1, true, false,
                     1, 'R');