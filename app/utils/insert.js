import db from '../db';

let insert = doc => {
  return new Promise((resolve, reject) => {
    db.insert(doc, function(err, newDoc) {
      resolve(doc);
    });
  });
};

export default insert;
