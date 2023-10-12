//TDD = test driven development og det er 


const data_sctucture = function (word){
    const result = {}; 

    for (const letter of word){
        result[letter] = 1;
    }

    return result;
}

const anagrams = function (word1, word2){

    const cleanWord1 = word1.replace(/[^a-zA-Z]/g, '').toLowerCase(); //regex (regular expression)
    const cleanWord2 = word2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    const sortedWord1 = cleanWord1.split('').sort().join('');
    const sortedWord2 = cleanWord2.split('').sort().join('');

    return sortedWord1 === sortedWord2;
}

exports.anagrams = anagrams;

exports.data_sctucture = data_sctucture;