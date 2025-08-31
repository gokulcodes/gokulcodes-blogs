import { NextRequest, NextResponse } from "next/server";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

// Handle GET requests to /api/users
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  let browser = null;

  try {
    // Launch a browser instance with the serverless-compatible Chromium
    browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true, // You can set this to false for debugging locally
    });

    const page = await browser.newPage();
    await page.setViewport({
      width: 1920, // Viewport width in pixels
      height: 1080, // Viewport height in pixels
    });
    const url = "https://blogs.gokulcodes.dev/index.html";
    await page.goto(url, { waitUntil: "networkidle0" });
    const awaitedParams = await params;
    page.evaluate((id) => {
      const el = document.querySelector("#main-title");
      if (el) {
        el.innerHTML = decodeURI(id);
        const body = document.body;
        let elementIndex = id.charCodeAt(0);
        elementIndex %= 7;
        body.style.backgroundImage = `url('https://blogs.gokulcodes.dev/backgrounds/background-${elementIndex}.jpg')`;
        console.log("Element Index: ", elementIndex);
        console.log("Background Image Set To: ", body.style.backgroundImage);
      }
    }, awaitedParams.id);

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
