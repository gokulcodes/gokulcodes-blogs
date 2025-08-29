import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

// Handle GET requests to /api/users
export async function GET() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://gokulcodes.dev/");
  const screenshot = await page.screenshot();
  await browser.close();

  const imageBuffer = Buffer.from(screenshot);
  return new NextResponse(imageBuffer, {
    status: 200,
    headers: {
      "Content-Type": "image/jpeg", // Set the correct MIME type
    },
  });
}
