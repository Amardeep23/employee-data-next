import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";
connectMongoDB();

export async function POST(request) {
  const { username, phone, email, emp_id, role, isActive } = await request.json();
  await Topic.create({ username, phone, email, emp_id, role, isActive });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  // await connectMongoDB();
  const topics = await Topic.find();
  // console.log('data recieved', topics) 
  return NextResponse.json({ topics });
}

// export async function PUT(request) {
//   const id = request.nextUrl.searchParams.get("id");
//   const { username, phone, email, emp_id, role, isActive } = await request.json();
//   await connectMongoDB();
//   await Topic.findByIdAndUpdate(id, { username, phone, email, emp_id, role, isActive });
//   return NextResponse.json({ message: "Topic updated" }, { status: 200 });
// }

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  // await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
