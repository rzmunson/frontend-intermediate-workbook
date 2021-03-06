'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var prompt = require('prompt');
prompt.start();

var board = [];
var solution = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i])
    }
}

function generateSolution(solution, guess) {
    for (var i = 0; i < 4; i++) {
        var randomIndex = getRandomInt(0, letters.length);
        solution += letters[randomIndex];
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
    // your code here

    var solutionArray = solution.split('');
    var guessArray = guess.split('');

    var correctLetterLocations = 0;
    var correctLetters = 0

    for (var i = 0; i < solutionArray.length; i++) {
        if (solutionArray[i] == guessArray[i]) {
            correctLetterLocations++;
            solutionArray[i] == null;
        }
    }

    for (var i = 0; i < solutionArray.length; i++) {
        for (var j = 0; j < guessArray.length; j++) {
            if (solutionArray[i] == guessArray[j]) {
                correctLetters++;
            }

        }

    }

    return correctLetterLocations.toString().red + '-' + correctLetters.toString().white + '-';
}
console.log(generateHint("abcd", "abdc"));



function mastermind(guess) {
    // your code here
    if (guess == solution) {
        return 'You guessed it!';
    } else if (board.length == 10) {
        return 'You ran out of turns! The solution was ' + solution;
        process.exit();
    } else {
        generateHint(solution, guess);
        test(solution, guess);
        return 'Guess again!';
    }
}

function test(solution, guess) {
    var hint = generateHint(solution, guess);
    board.push(hint + guess);
}



function getPrompt() {
    prompt.get(['guess'], function (error, result) {
        console.log(mastermind(result['guess']));
        printBoard();
        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

    describe('#mastermind()', function () {
        it('should register a guess and generate hints', function () {
            solution = 'abcd';
            mastermind('aabb');
            assert.equal(board.length, 1);
        });
        it('should be able to detect a win', function () {
            assert.equal(mastermind(solution), 'You guessed it!');
        });
    });
} else {

    generateSolution();
    getPrompt();
}