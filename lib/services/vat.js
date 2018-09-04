var util = require("util");

var Vat = (exports.Vat = function(Client) {
  this.client = Client;

  return this;
});

/**
 * Get vats
 * @param {Function} callback Gets called after request is complete
 */
Vat.prototype.getVats = function(
  filterID,
  selectAttributes,
  division,
  callback
) {
  var params = {
    $filter: filterID ? "ID eq " + filterID : "",
    $select: selectAttributes || "*"
  };

  if (typeof division === "function") {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest(
    "/v1/" + division + "/vat/Vats",
    "GET",
    params,
    null,
    callback
  );
};

/**
 * Get vats percentages
 * @param {Function} callback Gets called after request is complete
 */
Vat.prototype.getVatPercentages = function(division, callback) {
  if (typeof division === "function") {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest(
    "/v1/" + division + "/vat/VatPercentages",
    "GET",
    null,
    null,
    callback
  );
};
