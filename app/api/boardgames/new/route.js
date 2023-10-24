import { conntectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const {
    title,
    image,
    thumbnail,
    bggId,
    minPlayer,
    maxPlayer,
    minPlayTime,
    maxPlayTime,
    year,
    time,
    age,
    description,
    bbgLink,
  } = req.json();

  try {
    await conntectToDB();
  } catch (err) {
    console.log(err);
  }
};
