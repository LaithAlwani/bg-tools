import { conntectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const { title,
    image,
    thumbnail,
    bggId,
    minPlayer,
    maxPlayer,
    year,
    time,
    age,
    desc,
    tag,
    bbgLink
     } = req.json();
  
  try {
    await conntectToDB();
  }
  catch (err) {
    console.log(err)
  }
}