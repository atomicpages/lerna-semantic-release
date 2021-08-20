var getPackages = require("@lerna/project").getPackages;

module.exports = {
  getAllPackages: function () {
    return getPackages();
  },
};
