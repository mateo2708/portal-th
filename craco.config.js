const CracoAlias = require('craco-alias');
const CracoAntDesignPlugin = require('craco-antd');
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: '/src',
        source: 'jsconfig',
      },
    },
    {
      plugin: CracoAntDesignPlugin,
    },
    { plugin: CracoLessPlugin },
  ],
};
