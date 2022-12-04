module.exports = {
  saveEmployeeOps(getConnection, body) {
    return new Promise((resolve, reject) => {
      getConnection((err, conn) => {
        if (err) reject(err);

        conn.query("INSERT INTO employees set ?", [body], (err, rows) => {
          if (err) reject(err);

          resolve(rows);
        });
      });
    });
  },

  listEmployeeOps(getConnection, idcurrentUser) {
    return new Promise((resolve, reject) => {
      getConnection((err, conn) => {
        if (err) reject(err);

        conn.query("SELECT * FROM employees", (err, rows) => {
          if (err) reject(err);

          resolve(rows);
        });
      });
    });
  },

  putEmployeeOps (getConnection, nameemployee, indentification, department, id) {
    return new Promise((resolve, reject) => {
        getConnection((err, conn) => {
            if(err) reject(err)

            conn.query("UPDATE employees SET nameemployee = ?, indentification = ?, department = ? WHERE id = ?", [nameemployee, indentification, department, id], (err, rows) => {
                if (err) reject(err);
      
                resolve(rows);
              });
        }) 
    })
  },

  deleteEmployeeOps (getConnection,id) {
    return new Promise((resolve, reject) => {
        getConnection((err, conn) => {
            if(err) reject(err)

            conn.query("DELETE FROM employees WHERE employees.id = ? ", [id], (err, rows) => {
                if (err) reject(err);
      
                resolve(rows);
              });
        }) 
    })
  }

};
