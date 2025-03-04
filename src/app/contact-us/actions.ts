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
  console.log("data:", data);
  if (error) {
    return {
      message: "Validation Error",
      error: JSON.stringify(error.flatten()),
    };
  }

  const courier = new CourierClient({
    authorizationToken: process.env.COURIER_TOKEN,
  });

  const { requestId } = await courier.send({
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

  console.log("requestId:", requestId);
  if (!success) {
    return { message: "Failed to send contact information" };
  }

  try {
    return { message: `Sent contact information` };
  } catch (e) {
    return { message: "Failed to send contact information" };
  }
}
