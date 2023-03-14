'use strict';

/**
 * sandbox controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sandbox.sandbox');
