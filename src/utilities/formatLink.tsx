export default function formatLink(tag: string) {
  return `/tags/${tag.toLowerCase().replace(" ", "-").replace("%20", "-")}`;
}
