//getElementbyID id is finding the html element in the DOM. The function writeOutput is adding more elements to the DOM. 
//the += "is preforming string concatenation" which is the same thing as saying ...innerHtml = ...innerHtml+newStuff.  
//This function is adding text to the content of the paragraph element in the html document.
//The output is updating the view in the MVC model. idempotent = same input -> same output
function writeOutput(text) {
  document.getElementById("demo").innerHTML += text + "<br/>";
}
//this do while loop is promting for a number and keeps prompting until you give it a number.
//I'm using a do while loop because I know I have to prompt the user at least once.
//if you know its only a certian number of times in a row that some condition needs to 
//be executed I would use a for loop.
//More about this code... This is a controller function in the MVC model, that interacts with the users view to get input.
//refernce for self https://developer.chrome.com/apps/app_frameworks
function promptForNumber(message){
	var input;
	do{
		input = parseFloat(prompt(message));
	}while(isNaN(input));
	return input;
}
//This is a pure contoller function it has nothing to do with the view.  It is just running the logic.
function assignment(){
	var lowerNumber = promptForNumber("Please enter a lower bound number!");
	var highNumber = promptForNumber("Please enter a high bound number!");
	var testNumber = promptForNumber("Please enter a number between " + lowerNumber + " and " + highNumber);
	if(testNumber > lowerNumber && testNumber < highNumber){
		writeOutput("GOOD JOB, " + testNumber + " is a Number Between " + lowerNumber + " and " + highNumber)
	}else{
		writeOutput("WRONG!, " + testNumber + " is NOT a Number Between " + lowerNumber + " and " + highNumber)
	}


}
