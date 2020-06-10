const componentGenerator = require('./creators/component');
const viewGenerator = require('./creators/view');
const containerGenerator = require('./creators/container');
const hookGenerator = require('./creators/hook');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('view', viewGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('hook', hookGenerator);
};
