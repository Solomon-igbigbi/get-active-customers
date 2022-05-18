const csvtojson = require("csvtojson");
const { getActiveCustomers } = require("../services/solution.service");

exports.analyze = async (req, res) => {
  if (!req.file) {
    return res.status(400).send({ error: "No file uploaded" });
  }

  let data = [];
  const newData = {};

  data = await csvtojson().fromFile(req.file.path);

  data.forEach((element) => {
    if (!newData[element.customer]) {
      return (newData[element.customer] = [element]);
    }
    return newData[element.customer].push(element);
  });

  console.log("do stuff");

  try {
    const activeCustomers = await getActiveCustomers(newData);
    res.status(200).send({
      data: activeCustomers,
    });
  } catch (error) {
    return res.status(500).send({ error: "Something went Wrong" });
  }
};
