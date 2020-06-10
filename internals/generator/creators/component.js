const { requireField } = require('../utils');

function getComponentPromps(data) {
  return [
    {
      type: 'input',
      name: 'name',
      message: 'What is your component name?',
      validate: requireField('name'),
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description for your component:',
    },
    {
      type: 'input',
      name: 'authorName',
      default: 'MateoTG',
      message: 'Who is the author?',
    },
  ];
}

function getComponentActions(data) {
  const path = '../../src/components/';
  let actions = [
    {
      type: 'add',
      path: path + '{{pascalCase name}}/{{pascalCase name}}.jsx',
      templateFile: 'templates/Component/Component.jsx.hbs',
    },
    {
      type: 'add',
      path: path + '{{pascalCase name}}/index.js',
      templateFile: 'templates/Component/index.js.hbs',
    },
    {
      type: 'add',
      path: path + '{{pascalCase name}}/test/{{pascalCase name}}.test.js',
      templateFile: 'templates/Component/test.js.hbs',
    },
    {
      type: 'add',
      path: path + '{{pascalCase name}}/style.module.css',
      templateFile: 'templates/Component/style.module.css.hbs',
    },
    {
      type: 'add',
      path: path + 'index.js',
      templateFile: 'templates/injectable-index.js.hbs',
      skipIfExists: true,
    },
    {
      type: 'append',
      path: path + 'index.js',
      pattern: `/* GENERATOR_INJECT_IMPORT */`,
      template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
    },
    {
      type: 'append',
      path: path + 'index.js',
      pattern: `/* GENERATOR_INJECT_EXPORT */`,
      template: `\t{{pascalCase name}},`,
    },
  ];
  return actions;
}

module.exports = {
  description: 'Create a component',
  prompts: getComponentPromps(),
  actions: (data) => getComponentActions(data),
};
