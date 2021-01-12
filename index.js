//Classifier.js
var model;
var predResult = document.getElementById("result");
async function initialize(){
	model = await tf.loadLayersModel('tfjs_files/model.json');
}

aynch function predict(){
	//action for the submit button
	let image = document.getElementById('img');
	let tensorImg = tf.browser.fromPixels(image).resizeNearestNeighbor([150, 150]).toFloat().expandDims();
	pretiction = await model.predict(tensorImg).data();

	if (prediction[0] == 0){
		predResult.innerHTML = "Your cassava seems to be attacked by CBB disease";
	}
	else if (prediction[1]){
		predResult.innerHTML = "Your cassava seems to be attacked by CBSD disease";
	}
	else if (prediction[2]){
		predResult.innerHTML = "Your cassava seems to be attacked by CCGM disease";
	}
	else if (prediction[3]){
		predResult.innerHTML = "Your cassava seems to be attacked by CMD disease";
	}
	else if (prediction[4]){
		predResult.innerHTML = "Your cassava seems to be Healthy";
	}
}
initialize();