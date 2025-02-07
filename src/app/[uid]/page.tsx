import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Props = {
  params: Params;
};

type Params = Promise<{ uid: string }>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const client = createClient();
  const { uid } = await params;
  const page = await client.getByUID("page", uid).catch(() => notFound());

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Page({ params }: Props) {
  const client = createClient();
  const { uid } = await params;

  const page = await client.getByUID("page", uid).catch((e) => {
    console.error(e);
    return notFound();
  });

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
