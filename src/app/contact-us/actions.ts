"use server";

import { CourierClient } from "@trycourier/courier";
import { contactUsSchema } from "./contactUsSchema";

export async function contactUs(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const { data, error, success } = contactUsSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    content: formData.get("content"),
  });
  if (error) {
    return {
      message: "Validation Error",
      error: JSON.stringify(error.flatten()),
    };
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
