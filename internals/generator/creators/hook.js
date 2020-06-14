const { requireField } = require('../utils');

function getPromps() {
  return [
    {
      type: 'input',
      name: 'name',
      message: 'What is your Hook name?',
      validate: requireField('name'),
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description for your Hook:',
    },
    {
      type: 'input',
      name: 'authorName',
      default: 'MateoTG',
      message: 'Who is the author?',
    },
  ];
}

function getActions(data) {
  const path = '../../src/utils/hooks/';
  let actions = [
    {
      type: 'add',
      path: path + '{{camelCase name}}.js',
      templateFile: 'templates/hook.js.hbs',
    },
  ];
  return actions;
}

module.exports = {
  description: 'Create a hook',
  prompts: getPromps(),
  actions: (data) => getActions(data),
};
