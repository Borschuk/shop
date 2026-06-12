"use client";

import { Dialog, Flex, Text, Button, TextField } from "@radix-ui/themes";
import { updateProduct } from "@/actions/products";
import { useActionState, useEffect, useRef } from "react";

const initialState: { error?: string; success?: boolean } = {
  error: "",
};

export default function EditPopup({
  open,
  onOpenChange,
  productId,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productId: string;
}) {
  const [state, formAction] = useActionState(updateProduct, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      onOpenChange(false);
    }
  }, [state.success, onOpenChange]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit Product</Dialog.Title>

        <form ref={formRef} action={formAction}>
          <input type="hidden" name="id" value={productId} />

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Product Name
              </Text>
              <TextField.Root name="name" placeholder="Enter product name" />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Product Price
              </Text>
              <TextField.Root name="price" placeholder="Enter product price" />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Product Description
              </Text>
              <TextField.Root
                name="description"
                placeholder="Enter product description"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Country
              </Text>
              <TextField.Root name="country" placeholder="Enter country" />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Size
              </Text>
              <TextField.Root name="size" placeholder="Enter size" />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Color
              </Text>
              <TextField.Root name="color" placeholder="Enter color" />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Phone
              </Text>
              <TextField.Root name="phone" placeholder="Enter phone number" />
            </label>
          </Flex>

          {state?.error && (
            <Text color="red" size="2" mt="2">
              {state.error}
            </Text>
          )}

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Button type="submit">Save</Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
