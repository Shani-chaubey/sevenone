/**
 * Format price with rupee symbol if not already present
 * @param {string} price - The price string
 * @returns {string} - Formatted price with rupee symbol
 */
export function formatPrice(price) {
  if (!price) return "";

  const priceStr = String(price).trim();

  // If price already starts with ₹, return as is
  if (priceStr.startsWith("₹")) {
    return priceStr;
  }

  // If price starts with "Rs" or "rs", replace with ₹
  if (priceStr.match(/^[Rr][Ss]\.?\s*/)) {
    return "₹" + priceStr.replace(/^[Rr][Ss]\.?\s*/, "");
  }

  // If price is "On Request" or similar, return as is
  if (
    priceStr.toLowerCase().includes("request") ||
    priceStr.toLowerCase().includes("contact")
  ) {
    return priceStr;
  }

  // Otherwise, add ₹ prefix
  return "₹" + priceStr;
}
