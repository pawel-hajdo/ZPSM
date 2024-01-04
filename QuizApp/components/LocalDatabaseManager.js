import {openDatabase} from "react-native-sqlite-storage";

const db = openDatabase(
    {
        name: 'QuizDB',
        location: 'default',
    },
    ()=>{console.log("Database opened")},
    error => {console.log(error)}
);

export const createTables = () => {
    db.transaction((tx) => {
        tx.executeSql(
            ' CREATE TABLE IF NOT EXISTS Quizzes(\n' +
            '    id VARCHAR(24) PRIMARY KEY,\n' +
            '    name VARCHAR(255),\n' +
            '    description TEXT,\n' +
            '    level VARCHAR(50),\n' +
            '    numberOfTasks INT\n' +
            ');\n',
            [],
            (sqlTxn, res) => {console.log("Table Quizzes created successfully")},
            error => {console.log(error)}
        )
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS Tasks (\n' +
            '    id SERIAL PRIMARY KEY,\n' +
            '    quiz_id VARCHAR(24),\n' +
            '    question TEXT,\n' +
            '    duration INT,\n' +
            '    FOREIGN KEY (quiz_id) REFERENCES Quizzes(id)\n' +
            ');\n',
            [],
            (sqlTxn, res) => {console.log("Table Tasks created successfully")},
            error => {console.log(error)}
        )
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS TaskAnswers (\n' +
            '    task_id INT,\n' +
            '    answer_content TEXT,\n' +
            '    is_correct BOOLEAN,\n' +
            '    PRIMARY KEY (task_id, answer_content),\n' +
            '    FOREIGN KEY (task_id) REFERENCES Tasks(id)\n' +
            ');\n',
            [],
            (sqlTxn, res) => {console.log("Table TaskAnswers created successfully")},
            error => {console.log(error)}
        )
    })
}

export const addTestsToDB = () => {
    db.transaction((tx)=>{
        tx.executeSql()
    })
}

export default db;