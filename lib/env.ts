export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPPNUMBER ??
  (() => {
    throw new Error("NEXT_PUBLIC_WHATSAPPNUMBER is missing");
  })();
