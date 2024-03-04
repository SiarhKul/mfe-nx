// import { postCssConfig } from '@mfe-nx/settings-config';
const postCssConfig = require('../../libs/shared/configs/settings-config/src/lib/settings-config.js');

module.exports = (ctx) => postCssConfig(__dirname, '.admin', ctx);
