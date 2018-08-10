var util = require("util");

var FinancialTransactions = (exports.FinancialTransactions = function(Client) {
  this.client = Client;

  return this;
});

/**
 * This service posts the cash entries
 * @param {Integer} filterID Filter ID
 * @param {String} selectAttributes Atrribute Names seperated by comma
 * @param {Integer} division Division ID
 * @param {Function} callback Gets called after request is complete
 */
FinancialTransactions.prototype.postCashEntry = function(
  data,
  division,
  callback
) {
  if (typeof division === "function") {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest(
    "/v1/" + division + "/financialtransaction/CashEntries",
    "POST",
    null,
    data,
    callback
  );
};

/**
 * This service returns the General Ledger Accounts
 * @param {Integer} filterID Filter ID
 * @param {String} selectAttributes Atrribute Names seperated by comma
 * @param {Integer} division Division ID
 * @param {Function} callback Gets called after request is complete
 */
Financial.prototype.getCashEntries = function(
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
    "/v1/" + division + "/financialtransaction/CashEntries",
    "GET",
    params,
    null,
    callback
  );
};

/**
 * This service posts the cash entry lines
 * @param {Integer} filterID Filter ID
 * @param {String} selectAttributes Atrribute Names seperated by comma
 * @param {Integer} division Division ID
 * @param {Function} callback Gets called after request is complete
 */
FinancialTransactions.prototype.postCashEntryLines = function(
  data,
  division,
  callback
) {
  if (typeof division === "function") {
    callback = division;
    division = this.client.division;
  }

  this.client.sendRequest(
    "/v1/" + division + "/financialtransaction/CashEntryLines",
    "POST",
    null,
    data,
    callback
  );
};
