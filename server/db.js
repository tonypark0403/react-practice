const sqlite3 = require('sqlite3');

// const db = new sqlite3.Database(':memory:');
const db = new sqlite3.Database('./data.db', sqlite3.OPEN_READWRITE);

const users = [
  ['land', 'Global web', 'Team lead, Web, Payment, React'],
  ['bono', 'Global web', 'Team lead, Login, Task home'],
  ['shai', 'Local web', 'Developer, Video player, SNS check'],
];
const placeholders = users.map((_) => '(?,?,?)').join(',');
const sql = 'INSERT INTO user(name, department, tag) VALUES ' + placeholders;
db.run(
  sql,
  users.flatMap((_) => _),
  function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Rows inserted ${this.changes}`);
  }
);

db.close();
