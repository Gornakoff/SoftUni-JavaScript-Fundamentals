function matchAll(input) {
    let result = input[0].split(/[!@#$%^&*()|:{};'~`,. <>?'+=\-"\s]+/).filter(s => s!= '');

    console.log(result.join('|'));
}

//matchAll(['A Regular Expression needs to have the global flag in order to match all occurrences in the text'])
//matchAll(['_(Underscores) are also word characters'])
matchAll(['Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !'])