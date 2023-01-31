import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

import { logo } from "@/data/dataLogo";

export const config = {
  runtime: "edge",
};

const interFontLight = fetch(
  new URL("../../../../public/fonts/Inter-Light.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interFontRegular = fetch(
  new URL("../../../../public/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interFontMedium = fetch(
  new URL("../../../../public/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interFontBold = fetch(
  new URL("../../../../public/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  try {
    const interFontLightData = await interFontLight;
    const interFontRegularData = await interFontRegular;
    const interFontMediumData = await interFontMedium;
    const interFontBoldData = await interFontBold;

    const { searchParams } = new URL(req.url);

    const img = searchParams.get("img")?.slice(0, 100);
    const writer = searchParams.get("writer")?.slice(0, 100);
    const title = searchParams.get("title")?.slice(0, 100);
    const isDiscount = searchParams.get("isDiscount")?.slice(0, 100);
    const actualPrice = searchParams.get("actualPrice")?.slice(0, 100);
    const discountedPrice = searchParams.get("discountedPrice")?.slice(0, 100);
    const discount = searchParams.get("discount")?.slice(0, 100);
    const publisher = searchParams.get("publisher")?.slice(0, 100);

    return new ImageResponse(
      (
        <div
          tw="flex w-full items-center h-full"
          style={{ backgroundColor: "#fff" }}
        >
          <div
            tw="flex-shrink-0 w-1/3 flex h-full p-10 item-center justify-center"
            style={{
              backgroundColor: "#0A0F43",
            }}
          >
            <img
              tw="w-80 mt-8 shadow-2xl rounded-xl"
              src={img}
              alt="product image"
            />
          </div>
          <div tw="flex-1 flex flex-col justify-between h-full p-10">
            <div tw="flex flex-col w-full">
              <div
                tw="w-full"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span tw="flex-1 text-3xl font-medium text-zinc-900 mb-10">
                  {writer}
                </span>
              </div>

              <span
                tw="text-6xl font-bold text-zinc-900 w-full mb-12"
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "pre-wrap",
                }}
              >
                {title}
              </span>

              <div tw="flex flex-col">
                <span tw="text-6xl font-medium text-zinc-900 w-full mb-6">
                  {isDiscount == "true" ? discountedPrice : actualPrice}
                </span>
                {isDiscount == "true" ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      tw="p-1 text-3xl"
                      style={{
                        textDecoration: "line-through",
                      }}
                    >
                      {actualPrice}
                    </span>
                    <span tw="py-1 px-2 text-3xl bg-red-100 text-red-800 font-medium rounded-md">
                      {discount}
                    </span>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div
              tw="w-full"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div tw="flex-1 flex flex-col w-full">
                <span tw="text-base text-zinc-800 mb-2">Penerbit</span>
                <span tw="text-[22px] text-zinc-900">{publisher}</span>
              </div>
              <div tw="flex-1 flex justify-end">
                <img src={logo.logo} alt="logo gramedia" tw="w-42" />
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // debug: true,
        fonts: [
          {
            name: "Inter",
            data: interFontLightData,
            weight: 200,
          },
          {
            name: "Inter",
            data: interFontRegularData,
            weight: 400,
          },
          {
            name: "Inter",
            data: interFontMediumData,
            weight: 500,
          },
          {
            name: "Inter",
            data: interFontBoldData,
            weight: 600,
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
