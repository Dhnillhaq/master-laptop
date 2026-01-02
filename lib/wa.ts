export function waLink(phone: string, text: string) {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${phone}?text=${encoded}`;
}
