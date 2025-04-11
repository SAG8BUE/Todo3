const fs = require('fs');

function speichereTodo(dateiname, todoListe) {
    const daten = todoListe.join('\n');
    fs.writeFileSync(dateiname, daten, 'utf8');
}

// Beispiel-Eingaben
const todoListe = ["Einkaufen gehen", "Hausaufgaben machen", "Sport treiben"];

// Speichern der To-Do-Liste in einer Datei
speichereTodo('todo_liste.txt', todoListe);
export{}