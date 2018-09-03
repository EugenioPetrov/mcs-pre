// #1 Hello world

function HelloWorld() {
    return  'Hello World!'
}
console.log(HelloWorld());

// #2 Two fer

function twoFer(name) {
    return  'One for '+name+', one for me.'
}
console.log(twoFer('Ivan'));

// #3 Leap

function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
}

// #4 Reverse string

function reverse(s){
    return s.split("").reverse().join("");
}

// #5 Rna transcription

var translation = {C:'G', G:'C', A:'U', T:'A'};

var toRNA = function(strand) {
	return strand.split('').map(function(nt) {
		return translation[nt]
	}).join('')
}

// #6 Simple cipher


// #7 Pangram

function isPangram(input){
        if (!input) {
            return false;
        }
        input = input.toLowerCase();
        var set = new Set();
        for (var i = 0; i < input.length; ++i) {
            var charCode = input.charCodeAt(i);
            if (charCode >= 97 && charCode <= 122) {
                set.add(input.charCodeAt(i));
            }
        }
        return set.size >= 26;
    };

// #8 Bob

hey = function (input) {
    if (isSilence()) return 'Fine. Be that way!';
    if (isShouting()) return 'Whoa, chill out!';
    if (isQuestion()) return 'Sure.';
    return 'Whatever.';

    function isSilence() {
        return input.trim() === '';
    }

    function isShouting() {
        return /[A-Z]/.exec(input) !== null
            && input === input.toUpperCase();
    }

    function isQuestion() {
        return /\?$/.exec(input);
    }
};
