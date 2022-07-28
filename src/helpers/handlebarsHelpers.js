const dateFns = require("date-fns");

const isEqualTo = (data, equalToString) => {
  return data === equalToString;
};

const addString = (string1, string2) => {
  return string1 + string2;
};

const dateFormat = (date) => {
  const formattedDate = dateFns.format(new Date(date), "do MMMM, yyyy");
  return `Created: ${formattedDate}`;
};

module.exports = {
  isEqualTo,
  addString,
  dateFormat,
};
