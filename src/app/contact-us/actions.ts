"use server";

import { CourierClient } from "@trycourier/courier";
import { contactUsSchema } from "./contactUsSchema";

export async function contactUs(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const { data, error, success } = contactUsSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

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
      template: process.env.TEMPLATE_ID ?? "",
      data: {
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        subject: data?.subject,
        content: data?.content,
        source: data?.source,
      },
    },
  });

  if (!success) {
    return { message: "Failed to send contact information" };
  }

  return { message: `Sent contact information` };
}
