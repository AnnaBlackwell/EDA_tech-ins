var test = require('tape')
var request = require('superagent')


var students = [
		{ name: "Jane",
		age: 30},
		{ name: "Tom",
		age: 25},
		{ name: "Susan",
		age: 40}
		]

var sortFunction = function (students) {
	return students.sort(function(student1, student2) {
		return student1.name < student2.name
	})
}

var sortedStudents = sortFunction(students)

var eachStudent = function(students) {
	for (var i = 0; i < students.length; i++) {
		console.log([i] + students[i])
	}
}

eachStudent(students)

var aLetters = function(students) {
	//students.filter()
	//
}

var expectedArray = [
		"Jane",
		"Susan",
		"Tom"
		]

test('/returns array of students in alphabetical order', function (t) {

	t.deepEqual(sortedStudents, expectedArray, "actual array matches expected array")
	t.end()
})

var fetch = function(url, callback){
	request
		.get(url)
		.end(callback)
}

var logHtml = function(err, res) {
	console.log(res)
}

fetch('http://google.com', logHtml)






