'use strict';

/**
 * sandbox router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::sandbox.sandbox');
