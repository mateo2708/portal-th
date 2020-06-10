const { requireField } = require('../utils');

function getPromps(data) {
  return [
    {
      type: 'input',
      name: 'name',
      message: 'What is your containery name?',
      validate: requireField('name'),
    },
    {
      type: 'confirm',
      name: 'hasLazy',
      default: false,
      message: 'Does your container has lazy loading?',
    },
    {
      type: 'confirm',
      name: 'hasTranslations',
      default: false,
      message: 'Does your container has text?',
    },
    {
      type: 'input',
      name: 'description',
      default: 'Description',
      message: 'Write a description for your container:',
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
  const path = '../../src/containers/';
  let actions = [
    {
      type: 'add',
      path: path + '{{pascalCase name}}/{{pascalCase name}}.jsx',
      templateFile: 'templates/Container/Container.jsx.hbs',
    },
    {
      type: 'add',
      path: path + '{{pascalCase name}}/index.js',
      templateFile: 'templates/Container/index.js.hbs',
    },
    {
      type: 'add',
      path: path + '{{pascalCase name}}/test/{{pascalCase name}}.test.js',
      templateFile: 'templates/Container/test.js.hbs',
    },
    {
      type: 'add',
      path: path + '{{pascalCase name}}/style.module.css',
      templateFile: 'templates/Container/style.module.css.hbs',
    },
  ];

  if (data.hasLazy) {
    actions.push({
      type: 'add',
      path: path + '{{pascalCase name}}/Lazy{{pascalCase name}}.jsx',
      templateFile: 'templates/Container/lazy.jsx.hbs',
    });
  }

  return actions;
}

module.exports = {
  description: 'Create a container',
  prompts: getPromps(),
  actions: (data) => getActions(data),
};
