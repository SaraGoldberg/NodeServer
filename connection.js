const sql = require("mssql");

const config = {
  user: '211954722',
  password: '6565',
  server: 'srv2',
  domain: 'mbydomain',
  database: 'Apartment2Rent',
  options: {
    port: 1433,
    instanceName: 'pupils',
    trustServerCertificate: true
  }
};

const getRequest = async () => {
  // if(sql === null)
  //console.log(sql);
  sql.connect(config, function (err) {
    if (err) console.log(err);
  });
  return new sql.Request();
}

const runQuery = async (query) => {
  sql.connect(config)
    .then(function (err, res) {
      if (err) console.log(err);
      var sqlrequest = new sql.Request();
      sqlrequest.query(query)
        .then(function (recordset) {
          console.log(recordset);
          const inRes = recordset;
          sql.close(function (value) {
            console.log("connection closed");
          });
          console.log(inRes, 'inRes');
          // res = inRes;
          return inRes;
        })
      //   console.log(res,'resssssssssssss');
    }).catch(function (err) {
      console.log(err);
    });
}


module.exports.runQuery = runQuery;