"use server";

import { CourierClient } from "@trycourier/courier";
import { z } from "zod";

export async function contactUs(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    content: z.string(),
  });

  const { data, error, success } = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    content: formData.get("content"),
  });
  if (error) {
    throw new Error(error.message);
  }

  const courier = new CourierClient({
    authorizationToken: process.env.COURIER_TOKEN,
  });

  await courier.send({
    message: {
      to: {
        email: process.env.SEND_TO_EMAIL,
      },
      template: "TCJ6WVA8GQ45X7PXNFG04CWFMRE6",
      data,
    },
  });

  if (!success) {
    return { message: "Failed to send contact information" };
  }

  try {
    return { message: `Sent contact information` };
  } catch (e) {
    return { message: "Failed to send contact information" };
  }
}
