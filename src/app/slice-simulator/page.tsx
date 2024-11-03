import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";
import { redirect } from "next/navigation";

import { components } from "@/slices";

type Props = SliceSimulatorParams & {
  searchParams: Promise<{ secret?: string }>;
};

export default async function SliceSimulatorPage({ searchParams }: Props) {
  const { secret, state } = await searchParams;
  if (
    process.env.SLICE_SIMULATOR_SECRET &&
    secret !== process.env.SLICE_SIMULATOR_SECRET
  ) {
    redirect("/");
  }

  const slices = getSlices(state);

  return (
    <SliceSimulator>
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  );
}
