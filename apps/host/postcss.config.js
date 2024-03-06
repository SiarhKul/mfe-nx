const postCssConfig = require('../../libs/shared/configs/settings-config/src/lib/settings-config');

module.exports = (ctx) => postCssConfig(__dirname, '.host', ctx);
