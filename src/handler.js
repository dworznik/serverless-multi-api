'use strict';

module.exports.helloA = async (event, context) => {
  return { message: 'A-service:Your function executed successfully!', event };
};

module.exports.helloB = async (event, context) => {
  return { message: 'B-service:Your function executed successfully!', event };
};

