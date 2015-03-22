var lines = [
    'Do you really want to visit this site? If so, input the following sentence, then click OK:\n\n',
    'I am visiting this site out of an abiding regard for how it is a productive use of my time.'
];

var response = window.prompt(lines.join(''));

if (response !== lines[1]){
    window.location = 'https://www.google.com';
}
