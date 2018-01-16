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
	]

	// variable needed to make yes/no inputs unique
	let input_id = 1

	// Loop through each element in task and create table row for 
	task.forEach(function(t) {

		// Increment input_id by 1
		input_id++

		// Creating div/writing to display task data
		const taskDiv = $("<tr class='table-bordered'>");
		taskDiv.text(t);

		// Creating div/checkbox for yes column
		const yesBox = $("<td>");
		taskDiv.append(yesBox);
		const yes = $("<input type='checkbox'>")
		yes.attr("id", ("yes" + input_id))
		yesBox.append(yes);

		// Creating div/checkbox for no column
		const noBox = $("<td>")
		taskDiv.append(noBox);
		const no = $("<input type='checkbox' id='no'>")
		no.attr("id", ("no" + input_id))
		noBox.append(no);

		// Creating div/input box
		const inputBox = $("<td>");
		taskDiv.append(inputBox);
		const boxInput = $("<input>")
		boxInput.attr("id", ("boxInput" + input_id))
		inputBox.append(boxInput)

		// Append taskDiv to tableData div
		$("#tableData").append(taskDiv);
	})
})