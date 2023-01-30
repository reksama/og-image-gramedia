import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

import { logo } from "@/data/dataLogo";
import { data } from "@/data/dataStatic";

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

    const hasSlug = searchParams.has("slug");

    const find = data.find(
      (item) => item.slug === searchParams.get("slug")?.slice(0, 100)
    );

    const slug = hasSlug ? searchParams.get("slug")?.slice(0, 100) : "Default";

    if (find) {
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
                tw="w-80 mt-8 drop-shadow-2xl shadow-2xl rounded-xl"
                src={find.image}
                alt="product image"
              />
            </div>
            <div tw="flex-1 flex flex-col justify-between h-full p-10">
              <div tw="flex flex-col w-full">
                <span tw="text-xs text-zinc-500">Penulis</span>
                <span tw="text-xl text-zinc-900">{find.writer.name}</span>
              </div>
              <div tw="flex flex-col w-full">
                <span tw="text-xl md:text-6xl font-bold text-zinc-900 w-full" style={{
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'pre-wrap'
                }}>
                  {find.name}
                </span>
                <div tw="flex flex-col w-full mt-6">
                  {find.format.map((item, index) => {
                    if (item.default) {
                      return (
                        <div tw="flex flex-col" key={index}>
                          <span tw="text-md text-zinc-500 p-1">Mulai dari</span>
                          {item.stores.map((store, sindex) => {
                            if (store.default && store.prices.isDiscount) {
                              return (
                                <div tw="flex flex-col" key={sindex}>
                                  <span tw="text-4xl text-zinc-900 p-1 font-medium">
                                    {store.prices.discountPrice}
                                  </span>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      gap: 10,
                                    }}
                                  >
                                    <span
                                      tw="p-1"
                                      style={{
                                        textDecoration: "line-through",
                                      }}
                                    >
                                      {store.prices.actual}
                                    </span>
                                    <span tw="p-1 bg-red-100 text-red-800 font-medium rounded-md">
                                      {store.prices.discount}
                                    </span>
                                  </div>
                                </div>
                              );
                            }
                            return (
                              <div tw="flex flex-col" key={sindex}>
                                <span tw="text-4xl text-zinc-900 p-1 font-medium">
                                  {store.prices.actual}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <div tw="flex w-full">
                <div tw="flex flex-col">
                  <span tw="text-xs text-zinc-500">Tanggal Terbit</span>
                  <span tw="text-xl text-zinc-900">{find.release}</span>
                </div>
                <div tw="flex flex-col ml-10">
                  <span tw="text-xs text-zinc-500">Bahasa</span>
                  <span tw="text-xl text-zinc-900">{find.language}</span>
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
                  <span tw="text-xs text-zinc-500 mb-2">Penerbit</span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                    }}
                  >
                    <img
                      src={find.publisher.image}
                      alt="penerbit logo"
                      tw="w-6"
                    />
                    <span tw="text-xl text-zinc-900">
                      {find.publisher.name}
                    </span>
                  </div>
                </div>
                <div tw="flex-1 flex justify-end">
                  <img src={logo.logo} alt="logo gramedia" tw="w-40" />
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
    }

    return new ImageResponse(
      (
        <div
          tw="flex w-full items-center h-full"
          style={{ backgroundColor: "#fff" }}
        >
          Not found
        </div>
      ),
      {
        width: 1200,
        height: 630,
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
