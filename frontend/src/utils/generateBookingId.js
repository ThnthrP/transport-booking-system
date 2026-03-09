export default function generateBookingId() {
  const now = new Date();
  const year = now.getFullYear();
  const random = Math.floor(100 + Math.random() * 900);

  return `TRN-${year}-${random}`;
}