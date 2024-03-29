var score = 0;
var scoreText;
var scoreIncreaseInterval = 1000; // Increase the score every second
var scoreIncreaseAmount = 1; // Number of points to increase the score by
var playTime = 0;
var playTimeInterval;

var createHud = function () {
	var hudTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

	// Create a Text Block that can display the current score
	scoreText = new BABYLON.GUI.TextBlock();
	scoreText.fontFamily = "Comic Sans, Comic Sans MS";
	scoreText.color = "white";
	scoreText.fontSize = 48;
	scoreText.verticalAlignment = BABYLON.GUI.TextBlock.VERTICAL_ALIGNMENT_TOP;
	scoreText.horizontalAlignment = BABYLON.GUI.TextBlock.HORIZONTAL_ALIGNMENT_CENTER;
	scoreText.width = 0.5;
	scoreText.height = 0.15;

	updateScoreText();

	hudTexture.addControl(scoreText);
};

var updateScoreText = function () {
	scoreText.text = "Score: " + score;
};

var resetScore = function () {
	console.log("Score reset at: " + score);
	score = 0;
	updateScoreText();
};

var addScore = function (points) {
	score += points;
	updateScoreText();
};

var startPlaying = function () {
    playTimeInterval = setInterval(function () {
        playTime += scoreIncreaseInterval;
        addScore(scoreIncreaseAmount);
    }, scoreIncreaseInterval);
};

var stopPlaying = function () {
    clearInterval(playTimeInterval);
};