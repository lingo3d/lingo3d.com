'use strict';

/**
 * sandbox service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sandbox.sandbox');
