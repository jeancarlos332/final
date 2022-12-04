module.exports = {
    saveApiFakeOps(getConnection, body) {
      return new Promise((resolve, reject) => {
        getConnection((err, conn) => {
          if (err) reject(err);
  
          conn.query("INSERT INTO apifake set ?", [body], (err, rows) => {
            if (err) reject(err);
  
            resolve(rows);
          });
        });
      });
    },

  
    getApiFakeOps(getConnection, idcurrentUser) {
      return new Promise((resolve, reject) => {
        getConnection((err, conn) => {
          if (err) reject(err);
  
          conn.query("SELECT * FROM apifake", (err, rows) => {
            if (err) reject(err);
  
            resolve(rows);
          });
        });
      });
    },

  
    updateApiFakeOps (getConnection, albumId, thumbnailUrl, title, id) {
      return new Promise((resolve, reject) => {
          getConnection((err, conn) => {
              if(err) reject(err)
  
              conn.query("UPDATE apifake SET albumId = ?, thumbnailUrl = ?, title = ? WHERE id = ?", [albumId, thumbnailUrl, title, id], (err, rows) => {
                  if (err) reject(err);
        
                  resolve(rows);
                });
          }) 
      })
    },
  

    deleteApiFakeOps (getConnection,id) {
      return new Promise((resolve, reject) => {
          getConnection((err, conn) => {
              if(err) reject(err)
  
              conn.query("DELETE FROM apifake WHERE apifake.id = ? ", [id], (err, rows) => {
                  if (err) reject(err);
        
                  resolve(rows);
                });
          }) 
      })
    }
    
  };
  