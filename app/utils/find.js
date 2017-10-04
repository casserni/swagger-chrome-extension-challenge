import db from '../db';

let find = () => {
  return new Promise((resolve, reject) => {
    db.find({}, function(err, docs) {
      resolve(docs);
    });
  });
};
export default find;
