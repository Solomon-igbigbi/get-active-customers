const getActiveCustomers = async (newData) => {
  try {
    const activeCustomers = [];

    for (let element in newData) {
      //check if customers already active by checking if they made purchase every month
      if (newData[element].length === 12) {
        activeCustomers.push(element);
      } else {
        //number of concurrent times a customer made a purchase in year
        let count = 0;

        for (let i = 1; i < newData[element].length; i++) {
          //check month sequentially
          if (
            newData[element][i + 1] &&
            parseInt(newData[element][i - 1].month) + 1 ===
              parseInt(newData[element][i].month)
          ) {
            count += 1;
            //if cusomter made a purchase 3 time consecutivelly, they are active
            if (count >= 3) {
              activeCustomers.push(newData[element][i].customer);
              break;
            }
          } else {
            //reset months back to 0 for next customer
            count = 0;
          }
        }
      }
    }

    return { activeCustomers, count: activeCustomers.length };
  } catch (err) {
    throw new error(err);
  }
};

module.exports = {
  getActiveCustomers,
};
