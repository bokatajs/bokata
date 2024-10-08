/**
 * Represents an excel table, where first row is the title, second row the
 * name of each column, and next rows the data.
 */
class XTable {
  /**
   * Constructor of the class.
   * @param {Object[][]} matrix Matrix with the data from the excel table.
   */
  constructor(matrix) {
    this.build(matrix);
  }

  /**
   * Build the instance from a block of the excel representing the table.
   * @param {Object[][]} block Block of data directly from the excel.
   *
   */
  build(matrix) {
    this.keys = [];
    this.data = [];
    if (!matrix || matrix.length < 2 || !matrix[0] || matrix[0].length < 1) {
      this.name = '';
      return;
    }
    this.name = matrix[0][0].w;
    let row = matrix[1];
    for (let i = 0, l = row.length; i < l; i += 1) {
      if (row[i] && row[i].w) {
        this.keys.push(row[i].w);
      } else {
        this.keys.push(`_column_${i}`);
      }
    }
    for (let i = 2, li = matrix.length; i < li; i += 1) {
      row = matrix[i];
      const obj = {};
      for (let j = 0, lj = row.length; j < lj; j += 1) {
        obj[this.keys[j]] = row[j] && row[j].w ? row[j].w : undefined;
      }
      this.data.push(obj);
    }
  }

  /**
   * Indicates if a row match a given query.
   * @param {Object} row Row to match
   * @param {Object} query Query for the match
   * @returns {boolean} True if the row matchs the query, false otherwise.
   */
  match(row, query) {
    for (let i = 0, l = this.keys.length; i < l; i += 1) {
      const key = this.keys[i];
      const value = query[key];
      if (value && value !== row[key]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Given a query, find the rows that match the given query
   * @param {Objet} query Query for the match.
   * @returns {Object[]} Rows that match the query, cloned.
   */
  find(query) {
    const result = [];
    for (let i = 0, l = this.data.length; i < l; i += 1) {
      const row = this.data[i];
      if (this.match(row, query)) {
        result.push({ ...row });
      }
    }
    return result;
  }

  /**
   * Givena query, find the first row that match the query.
   * @param {Object} query Query for the match.
   * @returns {Object} First row that match the query, cloned.
   */
  findOne(query) {
    for (let i = 0, l = this.data.length; i < l; i += 1) {
      const row = this.data[i];
      if (this.match(row, query)) {
        return { ...row };
      }
    }
    return undefined;
  }
}

module.exports = XTable;
