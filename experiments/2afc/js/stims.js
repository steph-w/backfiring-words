var stimuli = [
//{
//	item: "girlfriend_vegetarian",
//	prompt: "Steve is having a hard time remembering who his roommate Jonathon is dating.<br>He knows it is either Jessica or Stephanie.",
//	pragmatic: "Jonathon arrives home from a date.<br>Steve asks, ''How was the date?''<br>Jonathon says, ''It was great. She ordered vegetarian food.''",
//	literal: "Steve notices on the kitchen counter a receipt for Jonathon's most recent date.<br>On the receipt, Steve saw that his date ordered vegetarian food.",
//	question: "Who is Jonathon dating?",
//	frequency: {
//		high: "<strong>Jessica</strong>, he knows, is a strict vegetarian and never eats meat.",
//		medium: "<strong>Jessica, he knows, is sort-of a vegetarian and eats meat only once a week."	
//	},
//	foil: "<strong>Stephanie</strong>, he knows, eats whatever.",
//	likely: "Jessica",
//	unlikely: "Stephanie"
//},
//{
//	item: "teacher_music",
//	prompt: "Sally is having a hard time remembering who her son has for his elementary school teacher.<br>She knows it is either Ms. Smith or Ms. Johnson.",
//	pragmatic: "Sally picks her son up from school.<br>She enters his classroom and he says: ''Mommy, the teacher taught music today.''",
//	literal: "Sally picks her son up from school.<br>She enters his classroom and sees the day's schedule; it read that the teacher taught music today.",
//	question: "Who is Billy's teacher?",
//	frequency: {
//		high: "<strong>Ms. Smith</strong>, she knows, has a musical lesson every day.",
//		medium: "<strong>Ms. Smith</strong>, she knows, has a musical lesson 4 out of 5 days."	
//	},
//	foil: "<strong>Ms. Johnson</strong>, she knows, has a musical lesson only occasionally.",
//	likely: "Ms. Smith",
//	unlikely: "Ms. Johnson"
//},
 {
 	item: "professor_attendance",
 	prompt: "Ed is having a hard time remembering which professor is teaching his daughter Lauren's philosophy class. He knows it is either Professor Burke or Professor Fought.",
 	pragmatic: "When his daughter comes home after class, she says to him, 'My professor took attendance today.'",
 	literal:[NEED TO THINK OF SOMETHING],
 	question: "Who is Lauren's professor?",
 	frequency: {
 		high: "Professor Burke, he knows, always takes attendance.",
 		medium:	
 	},
 	foil: "Professor Fought, he knows, only occasionally takes attendance.",
 	likely: "Professor Burke",
 	unlikely: "Professor Fought",
 	speakermanipulation: "When his daughter comes home after class, she has to fill out a survey for school.  She asks Ed if he can fill it out for her while she puts her things away.  Ed reads out loud the first question on the list, which is, 'Did your professor take attendance today?'  Lauren replies, 'Yes, My professor took attendance today.'"
 },
{
	item: "roommate_dishes",
	prompt: "Matt is having a hard time remembering who his friend Sophia's roommate is.<br>He knows it is either Alicia or Maya.",
	pragmatic: "Sophia and Matt are having lunch at Sophia's apartment.<br>Sophia says to Matt, 'My roommate washed her dishes today.'",
	literal: "Sophia and Matt are having lunch at Sophia's apartment. Matt looks around the kitchen area.<br>Sophia's roommate has washed her dishes today.",
	question: "Who is Sophia's roommate?",
	frequency: {
		high: "<strong>Alicia</strong>, he knows, always washes her dishes.",
		medium: "<strong>Alicia</strong>, he knows, almost always washes her dishes."	
	},
	foil: "<strong>Maya</strong>, he knows, only occasionally washes her dishes.",
	likely: "Alicia",
	unlikely: "Maya",
	speakermanipulation: "Sophia and Matt are having lunch at Sophia's apartment.  Sophia has a chore chart she needs to fill out for the apartment, so she asks Matt if he can write down information while she prepares some food.  Matt reads out loud the first item on the chart, which concerns washing dishes.  He asks, 'Did your roommate wash the dishes today?'  Sophia replies, 'Yes, my roommate washed the dishes today.'"
},
{
	item: "tutor_homework",
	prompt: "Molly is having a hard time remembering which student her officemate, Jenna, is tutoring.<br>She knows it is either Tom or Jim.",
	pragmatic: "In their office Jenna says to Molly, 'My student turned in his homework on time today.'",
	literal: "In their office, Molly notices some papers on Jenna's desk.<br>Jenna's student turned in his homework on time today.",
	question: "Who is Jenna's student?",
	frequency: {
		high: "<strong>Tom</strong>, she knows, always turns in his homework on time.",
		medium: "<strong>Tom</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Jim</strong>, she knows, only occasionally turns in his homework on time.",
	likely: "Tom",
	unlikely: "Jim",
	speakermanipulation: "In their office, Jenna asks Molly if she can help her fill out a daily report card for her student while she files away some papers.  Molly reads out loud the first question on the form, which is, 'Did your student turn in their homework on time today?'  Jenna replies, 'Yes, my student turned in his homework on time today.'"
},
{
	item: "maid_dusting",
	prompt: "Henry is having a hard time remembering which cleaning service his friend Phil's maid works for.<br>He knows it is either Maid By Me or Sunflowers Maid Service.",
	pragmatic: "Henry visits Phil at his apartment. Phil says to Henry, 'My maid dusted the windows today.'",
	literal: "Henry visits Phil at his apartment.  He inspects the windows.<br>The maid dusted the windows today.",
	question: "What cleaning service does Phil's maid work for?",
	frequency: {
		high: "<strong>Maid By Me</strong>, he knows, always dusts the windows.",
	//	medium: "<strong>Sunflowers Maid Service</strong>, he knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Sunflowers Maid Service</strong>, he knows, only occasionally dusts the windows.",
	likely: "Maid By Me",
	unlikely: "Sunflowers Maid Service",
	speakermanipulation: "Henry visits Phil at his apartment.  Phil asks Henry if he can help him fill out an evaluation of his maid who just cleaned his apartment while he prepares some food.  Henry reads out loud the first question on the form, which is, 'Did your maid dust the windows today?'  Phil replies, 'Yes, my maid dusted the windows today.'"
},
{
	item: "secretary_report",
	prompt: "Brian is having a hard time remembering who his friend Michael's new secretary is.<br>He knows it is either Danielle or Erica.",
	pragmatic: "Brian meets up with Michael at Michael's office to get lunch. Michael says to Brian,'My secretary kept a call log for me today.'",
	literal: "Brian meets up with Michael at Michael's office to get lunch.  Brian looks over at Michael's desk and sees a report left on it.<br>His secretary kept a call log for him today.",
	question: "Who is Michael's new secretary?",
	frequency: {
		high: "<strong>Danielle</strong>, she knows, always keeps a call log.",
	//	medium: "<strong>Tom</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Erica</strong>, she knows, only occasionally keeps a call log.",
	likely: "Danielle",
	unlikely: "Erica",
	speakermanipulation: "Brian meets up with Michael at Michael's office to get lunch.  Before they eat, they decide to fill out a form from the company about the secretaries' performance.  Michael has his hands full, so Brian asks the questions out loud.  He asks, 'Did your secretary keep a call log today?'  Michael replies, 'Yes, my secretary kept a call log today.'"
},
{
	item: "mechanic_inspection",
	prompt: "Barbara is having a hard time remembering who her husband's mechanic is.<br>She knows it is either Joe or Bob.",
	pragmatic: "When Barbara's husband comes home from his errands, he says to her, 'The mechanic did the oil change in under fifteen minutes today.'",
	literal: "When Barbara's husband comes home from his errands, she sees the receipt from his mechanic.<br>The mechanic did the oil change in under fifteen minutes today.",
	question: "Who is Barbara's husband's mechanic?",
	frequency: {
		high: "<strong>Joe</strong>, she knows, always does oil changes in under fifteen minutes.",
	//	medium: "<strong>Bob</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Bob</strong>, she knows, only occasionally does oil changes in under fifteen minutes.",
	likely: "Joe",
	unlikely: "Bob",
	speakermanipulation: "When Barbara's husband comes home from his errands, he asks her if she can help him fill out an evaluation form for the mechanic since his hands are dirty.  Barbara begins to ask the questions.  She asks, 'Did the mechanic do the oil change in under fifteen minutes today?'  Her husband replies, 'Yes, the mechanic did the oil change in under fifteen minutes today.'"
//THE QUESTION ON THIS FORM ACTUALLY IMPLIES THAT THE MECHANIC SHOULD HAVE DONE THIS... NOT SURE IF THAT'S OK
},
{
	item: "doctor_writing",
	prompt: "Rebecca is having a hard time remembering who her friend Jennifer's doctor is.<br>She knows it is either Dr. Smith or Dr. Jones.",
	pragmatic: "When Jennifer comes back from her doctor's appointment, she says to Rebecca, 'My doctor wrote legibly today.'",
	literal: "When Jennifer comes back from her doctor's appointment, she takes out her prescription and leaves it on the table.  Rebecca looks at the handwriting on the prescription.<br>Jennifer's doctor wrote legibly today.",
	frequency: {
		high: "<strong>Dr. Smith</strong>, she knows, always writes legibly.",
	//	medium: "<strong>Tom</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Dr. Jones</strong>, she knows, only occasionally writes legibly.",
	likely: "Dr. Smith",
	unlikely: "Dr. Jones",
	speakermanipulation: "When Jennifer comes back from her doctor's appointment, she asks Rebecca if she can help her fill out an on-line review of the doctor since her hand is in a bandage.  Rebecca reads the questions out loud to Jennifer.  She asks, 'Did the doctor write legibly?'  Rebecca replies, 'Yes, my doctor wrote legibly today.'"
},
]