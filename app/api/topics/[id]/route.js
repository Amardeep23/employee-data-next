import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";
import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  origin: '*',
});

export async function PUT(request, res, { params }) {
  // await NextCors(req, res, {
  //   // Options
  //   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  //   origin: "*",
  //   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  // });
  await cors(request, res); // Run the cors middleware
  const { id } = params;
  const { newUsername : username, newPhone : phone, newEmail : email, newEmp_id : emp_id, newRole : role, newIsActive : isActive } = request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { username, phone, email, emp_id, role, isActive });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, res, { params }) {
  // await NextCors(req, res, {
  //   // Options
  //   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  //   origin: "*",
  //   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  // });
  await cors(request, res); // Run the cors middleware
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
