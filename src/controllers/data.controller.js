const Array = require("../data");

const getData = async (req, res) => {
  try {
    const data = await Array;

    if (!data) return res.status(404).json({ msg: "Not found" });
    else res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ msg: "Error" });
  }
};

module.exports = { getData };
