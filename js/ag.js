$(document).ready(function() {

	// Object of tasklists
	const task = [
		"Oberserved Team Member properly washing hands; coached as needed",
		"Are hands washed before and after wearing gloves?",
		"Do handwashing sinks have: soap, hot/cold water and disposable paper towels",
		"Are disposable gloves available and being worn properly?",
		"Proper hair restraints worn in food service area?",
		"Is the sanitizer solution in the three compartment sink 200 PPM?",
		"Is the sanitizer solution in the sanitizer bucket 200 PPM?",
		"All chemicals are labeled and properly stored?",
		"Observed Team members eating, drinking, smokeing, chewing gum in food service area?",
		"Is food temperature being checked when being brought into service?",
		"Is all food stored properly (labeled, rotated, 6 inches above the ground)?",
		"Has Any Team Member been ill in the last 24 hours (Who)?",
		"Ice scoop used and properly stored?",
		"Have you noticed any pest or rodent activity?",
		"Additional coaching needed: "
	];

	const results = {};

	// Loop through each element in task and create table row  
	task.forEach(function(t) {

		// Creating div/writing to display task data
		const taskDiv = $("<tr class='table-bordered'>");
		taskDiv.text(t);

		// Creating div/checkbox for yes column
		const doneBox = $("<td>");
		taskDiv.append(doneBox);
		const done = $("<input type='checkbox' value='incomplete'>")
		done.attr("id", (t))
		doneBox.append(done);

		// Creating div/input box
		const inputBox = $("<td>");
		taskDiv.append(inputBox);
		const boxInput = $("<input type='text'>")
		boxInput.attr("id", (t + ":inputValue"))
		inputBox.append(boxInput)

		// Append taskDiv to tableData div
		$("#tableData").append(taskDiv);
	})


	//Changing value of checkbox div on click and 
	//saving it to results object
	$('input:checkbox').click(function() {
		const new_object = {
			'complete': false, 'message': " " 
		};
		const textInput = $(this).closest('tr').find('input[type=text]');
		const clickValue = $(this).attr("value")
		const id = $(this).attr('id');
		if (clickValue === 'incomplete') {
			$(this).attr("value", 'complete');
			const c_value = $(this).attr('value');
			results[id] = c_value;
			console.log(results)
			new_object.complete = true
			new_object.message = textInput.val();
			// console.log($('#' + id + ":inputValue"));
			//localStorage.setItem(id, c_value)
		} else if (clickValue === 'complete') {
			$(this).attr("value", 'incomplete');
			const i_value = $(this).attr('value');
			//localStorage.setItem(id, i_value)
			results[id] = i_value
			new_object.complete = false
			new_object.message = textInput.val();
		}
		localStorage.setItem(id, JSON.stringify(new_object));
	});


	
	
})