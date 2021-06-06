select * from Leader;

insert into Mission (LeaderBonusName, mission_name, mission_text,
                     skill_type, lowest_skill_needed, starting_card, project_card,
                     total_in_deck, faction)
                     values (null, 'if you see this your good', 'Attempt in any populous system. </br>If there are Rebel units in this </br>system, roll 2 additional dice. </br></br>If successful, gain 1 loyalty in this system.',
                     'D', 1, true, false,
                     1, 'R');