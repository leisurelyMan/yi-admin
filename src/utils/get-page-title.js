import defaultSettings from "@/settings";

const title = defaultSettings.title || "绿色债券共识";

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
