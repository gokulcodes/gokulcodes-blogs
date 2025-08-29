import { NextResponse } from "next/server";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

// Handle GET requests to /api/users
export async function GET() {
  let browser = null;

  try {
    // Launch a browser instance with the serverless-compatible Chromium
    browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true, // You can set this to false for debugging locally
    });

    const page = await browser.newPage();
    const url = "https://gokulcodes.dev";
    await page.goto(url, { waitUntil: "networkidle0" });

    // Capture a screenshot
    const screenshot = await page.screenshot({ type: "png" });

    await browser.close();

    // Return the screenshot as a response
    return new NextResponse(Buffer.from(screenshot), {
      status: 200,
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    if (browser) {
      await browser.close();
    }
    console.error("Error generating screenshot:", error);
    return NextResponse.json(
      { error: "Failed to generate screenshot" },
      { status: 500 }
    );
  }
}
