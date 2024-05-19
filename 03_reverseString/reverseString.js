const reverseString = function(string) {
    let text = string;
    text_in_char = string.split("");
    result = text_in_char.toReversed();
    result = result.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
