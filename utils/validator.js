exports.validateNumber = (value) => {
  if (typeof value !== "number" || isNaN(value)) {
    throw new Error(`\n*Input harus berupa angka\n`);
  }
};
