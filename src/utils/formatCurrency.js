/**
 * Formats a numeric amount into Indian Rupees (INR - ₹) using Intl.NumberFormat
 * Locale: en-IN, Currency: INR
 */
export const formatCurrency = (amount) => {
  if (amount === null || amount === undefined || isNaN(amount)) return '';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(amount);
};
