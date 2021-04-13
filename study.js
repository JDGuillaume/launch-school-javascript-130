function multiply(number1, number2) {
  return number1 * number2;
}

let multiplyBySeven = multiply.bind(null, 7);

console.log(multiplyBySeven(2));

function buildUri(protocol) {
  return function(domain, path) {
    return createUri(protocol, domain, path);
  };
}

function createUri(protocol, domain, path) {
  return protocol + '://' + domain + '/' + path;
}

let buildHttpsUri = buildUri('https');
let launchSchoolCourses = buildHttpsUri('launchschool.com', 'course_catalog');
console.log(launchSchoolCourses); // ->  https://launchschool.com/course_catalog
