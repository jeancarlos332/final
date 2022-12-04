module.exports = {
  saveInformationGamesOps(getConnection, body) {
    return new Promise((resolve, reject) => {
      getConnection((err, conn) => {
        if (err) reject(err);

        conn.query("INSERT INTO games set ?", [body], (err, rows) => {
          if (err) reject(err);

          resolve(rows);
        });
      });
    });
  },

  getInformationGamesOps(getConnection, idcurrentUser) {
    return new Promise((resolve, reject) => {
      getConnection((err, conn) => {
        if (err) reject(err);

        conn.query("SELECT * FROM games", (err, rows) => {
          if (err) reject(err);

          resolve(rows);
        });
      });
    });
  },

  putInformationGamesOps (getConnection, title, description, category, id) {
    return new Promise((resolve, reject) => {
        getConnection((err, conn) => {
            if(err) reject(err)

            conn.query("UPDATE games SET title = ?, description = ?, category = ? WHERE id = ?", [title, description, category, id], (err, rows) => {
                if (err) reject(err);
      
                resolve(rows);
              });
        }) 
    })
  },

  deleteInformationGamesOps (getConnection,id) {
    return new Promise((resolve, reject) => {
        getConnection((err, conn) => {
            if(err) reject(err)

            conn.query("DELETE FROM games WHERE games.id = ? ", [id], (err, rows) => {
                if (err) reject(err);
      
                resolve(rows);
              });
        }) 
    })
  }

};
