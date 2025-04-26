import { readFileSync, existsSync } from "fs";
import path from "path";

const filePath = path.resolve("/tmp/feedbacks.json");

export async function handler() {
  if (!existsSync(filePath)) {
    return {
      statusCode: 200,
      body: JSON.stringify([]),
    };
  }

  const feedbacks = JSON.parse(readFileSync(filePath));

  return {
    statusCode: 200,
    body: JSON.stringify(feedbacks),
  };
}
