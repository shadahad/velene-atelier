"use server";

import { revalidatePath } from "next/cache";

export interface ActionResult {
  success: boolean;
  message: string;
  cartId?: string;
  checkoutUrl?: string;
}

export async function addToCartAction(prevState: ActionResult | null, formData: FormData): Promise<ActionResult> {
  const variantId = formData.get("variantId")?.toString();
  const title = formData.get("title")?.toString() || "Object";

  if (!variantId) {
    return { success: false, message: "A selection is required." };
  }

  // If live Shopify keys exist, run the storefront cartLinesAdd GraphQL mutation here.
  // When running local or mock, simulate an authenticated cart line creation.
  await new Promise((r) => setTimeout(r, 300));
  revalidatePath("/");

  return {
    success: true,
    message: `${title} has been added to your curation basket.`,
    checkoutUrl: "#checkout-mock-preview",
  };
}