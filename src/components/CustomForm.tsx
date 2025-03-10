"use client";

import { FC, useState, useEffect, useActionState } from "react";
import { Button, Textarea } from "@heroui/react";
import { contactUs } from "@/app/contact-us/actions";
import { FlattenedErrors } from "@/app/contact-us/contactUsSchema";
import FormInput from "@/components/FormInput";
import { Form } from "@heroui/form";

export type ContactUsFormProps = { source: string };

const CustomForm: FC<ContactUsFormProps> = ({ source }) => {
  const [state, formAction, isPending] = useActionState(contactUs, {
    message: "",
    error: "{}",
  });
  const [errors, setErrors] = useState<FlattenedErrors>();

  useEffect(() => {
    setErrors(JSON.parse(state?.error ?? "{}"));
    console.log(state);
  }, [state]);

  return (
    <Form
      className="flex flex-col items-center gap-4 mt-10"
      action={formAction}
    >
      <input type="hidden" name="source" value={source} />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10">
        <FormInput
          label="First Name"
          name="firstName"
          color="default"
          error={errors?.fieldErrors?.firstName}
          isRequired
        />
        <FormInput
          label="Last Name"
          name="lastName"
          color="default"
          error={errors?.fieldErrors?.lastName}
          isRequired
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          color="default"
          isRequired
          error={errors?.fieldErrors?.email}
        />
        <FormInput
          label="Subject"
          name="subject"
          color="default"
          error={errors?.fieldErrors?.subject}
        />
        <Textarea
          className="col-span-full"
          label="Content"
          name="content"
          variant="flat"
          required
        />
      </div>
      <div className="flex justify-center">
        <Button
          formAction={formAction}
          type="submit"
          aria-disabled={isPending}
          color="default"
          className="w-32 center"
        >
          Send
        </Button>
      </div>
    </Form>
  );
};

export default CustomForm;
