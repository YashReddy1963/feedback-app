import { writeFileSync, readFileSync, existsSync } from "fs";
import path from "path";

const filePath = path.resolve("/tmp/feedbacks.json");

export async function handler(event) {
  const data = JSON.parse(event.body);

  let feedbacks = [];
  if (existsSync(filePath)) {
    feedbacks = JSON.parse(readFileSync(filePath));
  }

  feedbacks.push(data);
  writeFileSync(filePath, JSON.stringify(feedbacks));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Feedback received" }),
  };
}
