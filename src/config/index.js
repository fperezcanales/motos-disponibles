const DBNAME = process.env.DB_USER;
const DBPASSWORD = process.env.DB_PASS;
const DBHOSTCLUSTER = process.env.DB_HOST_CLUSTER;
const url = `mongodb+srv://${DBNAME}:${DBPASSWORD}@${DBHOSTCLUSTER}`

const config = {
  db: {
    url: url,
    type: 'mongo',
    onError: (err) => {
      console.log('DB Connection Failed!', err);
    },
    onSuccess: () => {
      console.log('DB Successfully Connected!');
    },
  },
};

module.exports = config;
