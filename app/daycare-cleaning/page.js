import IndustryPage, { industryMetadata } from "../_industry/IndustryPage";

export const metadata = industryMetadata("daycare");

export default function Page() {
  return <IndustryPage industry="daycare" />;
}
