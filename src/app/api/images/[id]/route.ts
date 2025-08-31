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
      const mainTitleEl = document.querySelector("#main-title");

      if (mainTitleEl) {
        // Set the inner HTML of the main title element
        mainTitleEl.innerHTML = decodeURI(id);

        // Calculate the background image index based on the first character of the id
        // const elementIndex = id.charCodeAt(0) % 7;

        // Set the background image of the body
        // document.body.style.backgroundImage = `url('backgrounds/background-${elementIndex}.jpg')`;

        // Log for debugging
        // console.log("Element Index: ", elementIndex);
        // console.log(
        //   "Background Image Set To: ",
        //   document.body.style.backgroundImage
        // );
      } else {
        // Optional: Log a message if the element is not found
        console.warn("Element with ID 'main-title' not found.");
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
