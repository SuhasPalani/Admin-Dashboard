import OverallStat from "../models/OverallStat.js";

export const getSales = async (req, res) => {
  try {
    const oversallStats = await OverallStat.find();

    res.status(200).json(oversallStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
