import request from 'superagent';
import db from '../db';

let sendRequest = (scheme, path, method, payload) => {
  let url = '';
  let pay = JSON.parse(payload);
  if (path.includes('id') || path.includes('ID') || path.includes('Id')) {
    url = `${scheme}://todos.stoplight.io/todos/${pay.id}?apikey=123`;
  } else {
    url = `${scheme}://todos.stoplight.io${path}?apikey=123`;
  }
  let doc = {
    path: url,
    method: method,
    payload: pay,
  };
  let send = request;
  switch (method.toUpperCase()) {
    case 'GET':
      send.get(url).send(pay).set('accept', 'json').end((err, res) => {
        doc.responseStatus = res.statusText;
        doc.text = res.text;
        db.insert(doc, function(err, newDoc) {});
      });
      break;
    case 'POST':
      send.post(url).send(pay).set('accept', 'json').end((err, res) => {
        doc.responseStatus = res.statusText;
        doc.text = res.text;
        db.insert(doc, function(err, newDoc) {});
      });
      break;
    case 'PUT':
      send.put(url).send(pay).set('accept', 'json').end((err, res) => {
        doc.responseStatus = res.statusText;
        doc.text = res.text;
        db.insert(doc, function(err, newDoc) {});
      });
      break;
    case 'PATCH':
      send.patch(url).send(pay).set('accept', 'json').end((err, res) => {
        doc.responseStatus = res.statusText;
        doc.text = res.text;
        db.insert(doc, function(err, newDoc) {});
      });
      break;
    case 'DELETE':
      send.delete(url).send(pay).set('accept', 'json').end((err, res) => {
        doc.responseStatus = res.statusText;
        doc.text = res.text;
        db.insert(doc, function(err, newDoc) {});
      });
  }
  return doc;
};

export default sendRequest;
