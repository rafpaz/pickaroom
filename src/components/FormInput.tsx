import { Input, InputProps } from "@heroui/react";

interface FormInputProps extends InputProps {
  error?: string[] | undefined;
}

const FormInput = ({ error, ...props }: FormInputProps) => {
  return (
    <Input
      color="primary"
      className="w-full"
      variant="bordered"
      isInvalid={!!error}
      errorMessage={error}
      {...props}
    />
  );
};

export default FormInput;
