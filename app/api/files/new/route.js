import File from "@models/file";
import { conntectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { postTitle, boardgameId, images, files, desc, tag, userId } = await req.json();
  try {
    await conntectToDB();
    console.log(boardgameId)
    const newFile = new File({
      postTitle,
      boardgameId,
      images,
      files,
      desc,
      tag,
      creator: userId,
    });
    console.log(newFile)
    await newFile.save();
    return NextResponse.json(newFile, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json("Faild to create new File", { status: 500 });
    
  }
}