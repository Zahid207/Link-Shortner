import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("URLshortner");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl: body.shorturl });

    if (doc) {
      return Response.json({
        success: false,
        error: true,
        message: "URL already exists!",
      });
    } else {
      const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl,
      });

      return Response.json({
        success: true,
        error: false,
        message: "URL generated successfully",
      });
    }
  } catch (error) {
    console.error(error);
    return Response.json({
      success: false,
      error: true,
      message: "Something went wrong on the server",
    }, { status: 500 });
  }
}