#! /usr/bin/env node
import inquirer from "inquirer";
let todos_list1 = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what do you want to add in your todo?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more todo?",
            default: "false"
        }
    ]);
    todos_list1.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos_list1);
}
;
