import dbConnect from "../../utils/dbConnect";
import Grade from "../../models/Grade";

dbConnect();

export default async function handler(req, res) {
  const { schoolName } = req.query;
  const grades = await Grade.find({
    schoolName: { $regex: schoolName, $options: "i" },
  });
  res.status(200).json(grades);
}
