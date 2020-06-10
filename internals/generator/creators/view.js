const { requireField } = require('../utils');

function getPromps(data) {
  return [
    {
      type: 'input',
      name: 'name',
      message: 'What is your view name?',
      validate: requireField('name'),
    },
    {
      type: 'confirm',
      name: 'hasRoutes',
      default: false,
      message: 'Does your view has nested routes?',
    },
    {
      when: (response) => response.hasRoutes,
      type: 'input',
      name: 'viewPath',
      message: "What's this view default route?",
    },
    {
      type: 'confirm',
      name: 'hasTranslations',
      default: false,
      message: 'Does your view has text?',
    },
    {
      type: 'confirm',
      name: 'hasLazy',
      default: false,
      message: 'Does your view has lazy loading?',
    },
    {
      type: 'input',
      name: 'description',
      default: 'Description',
      message: 'Write a description for your view:',
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
  const path = '../../src/views/';
  let actions = [
    {
      type: 'add',
      path: path + '{{pascalCase name}}/{{pascalCase name}}.jsx',
      templateFile: 'templates/View/View.jsx.hbs',
    },
    {
      type: 'add',
      path: path + '{{pascalCase name}}/index.js',
      templateFile: 'templates/View/index.js.hbs',
    },
    {
      type: 'add',
      path: path + '{{pascalCase name}}/test/{{pascalCase name}}.test.js',
      templateFile: 'templates/View/test.js.hbs',
    },
    {
      type: 'add',
      path: path + '{{pascalCase name}}/style.module.css',
      templateFile: 'templates/View/style.module.css.hbs',
    },
  ];

  if (data.hasLazy) {
    actions.push({
      type: 'add',
      path: path + '{{pascalCase name}}/Lazy{{pascalCase name}}.jsx',
      templateFile: 'templates/View/lazy.jsx.hbs',
    });
  }

  if (data.hasRoutes) {
    actions.push({
      type: 'add',
      path: path + '{{pascalCase name}}/routes.js',
      templateFile: 'templates/View/routes.js.hbs',
    });
  }

  return actions;
}

module.exports = {
  description: 'Create a view',
  prompts: getPromps(),
  actions: (data) => getActions(data),
};
