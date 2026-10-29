"use server";

export async function subscribeNewsletter(prevState: { success: boolean; message: string } | null, formData: FormData) {
  const email = formData.get("email")?.toString();

  if (!email || !email.includes("@")) {
    return { success: false, message: "Please enter a valid private correspondence email." };
  }

  // Ready for Shopify Customer Creation mutation or Klaviyo sync
  await new Promise((res) => setTimeout(res, 250));

  return {
    success: true,
    message: "Thank you for joining our private collector circle.",
  };
}