"use strict"

class student
{
	#name;
	#age;
	constructor(args)
	{
		this.#name = args.name;
		this.#age = args.age;
	}
	get get_name()
	{
		return this.#name;
	}
	get get_age()
	{
		return this.#age;
	}
};

const my_student = new student({name : "Jeffrey", age : 25});
console.log("student`s name : ", my_student.get_name);
console.log("student`s age : ", my_student.get_age);
