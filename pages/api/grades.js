import dbConnect from "../../utils/dbConnect";
import Grade from "../../models/Grade";

dbConnect();

export default async function handler(req, res) {
  const { schoolName } = req.query;
  const grades = schoolName
    ? await Grade.find({
        schoolName: { $regex: schoolName, $options: "i" },
      })
    : await Grade.find({});
  res.status(200).json(grades);
}
