var sinon = require('sinon');
var sandbox = sinon.createSandbox(sinon.defaultConfig);
var makeMockTask = require('../make-mock-task');

module.exports = {
  mock: function () {
    // sandbox.createStubInstance();
  },
  restore: function () {
    module.exports.touch.resetTask();
    module.exports.pushdSync.resetHistory();
    module.exports.popdSync.resetHistory();
    module.exports.lnSync.resetHistory();
    module.exports.unlinkSync.resetHistory();
  },
  pushdSync: sandbox.spy(),
  popdSync: sandbox.spy(),
  touch: makeMockTask(sandbox),
  cwdSync: function cwd () {
    return '.';
  },
  lnSync: sandbox.spy(),
  unlinkSync: sandbox.spy()
};
