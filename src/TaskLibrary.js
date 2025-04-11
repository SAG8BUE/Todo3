"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskLibrary = void 0;
class TaskLibrary {
    constructor() {
        this.completedTodos = [];
        this.activeTodos = [];
    }
    // Aufgabe als erledigt markieren
    completeTask(todo) {
        const index = this.activeTodos.indexOf(todo);
        if (index !== -1) {
            this.activeTodos.splice(index, 1); // Entfernen aus aktiven Aufgaben
            this.completedTodos.push(todo); // Hinzufügen zu erledigten Aufgaben
            console.log(`Aufgabe '${todo}' wurde als erledigt markiert.`);
        }
        else {
            console.log(`Aufgabe '${todo}' wurde nicht in den aktiven Aufgaben gefunden.`);
        }
    }
    // Erledigte Aufgabe reaktivieren
    reactivateTask(todo) {
        const index = this.completedTodos.indexOf(todo);
        if (index !== -1) {
            this.completedTodos.splice(index, 1); // Entfernen aus erledigten Aufgaben
            this.activeTodos.push(todo); // Hinzufügen zu aktiven Aufgaben
            console.log(`Aufgabe '${todo}' wurde reaktiviert.`);
        }
        else {
            console.log(`Aufgabe '${todo}' wurde nicht in der Historie gefunden.`);
        }
    }
    // Aufgaben anzeigen
    displayTasks() {
        console.log("Aktive Aufgaben:", this.activeTodos);
        console.log("Erledigte Aufgaben:", this.completedTodos);
    }
}
exports.TaskLibrary = TaskLibrary;
// suche aus der History Ältere aufgaben und clone sie. 
function showContent() {
    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
    const original = { a: 1, b: { c: 2 } };
    const copy = JSON.parse(JSON.stringify(original));
    return copy;
}
// Beispielnutzung
const taskLibrary = new TaskLibrary();
taskLibrary["activeTodos"] = ["Einkaufen", "Haus putzen", "Projekt abschließen"]; // Beispielaufgaben
taskLibrary.completeTask("Haus putzen");
taskLibrary.reactivateTask("Haus putzen");
taskLibrary.displayTasks();
