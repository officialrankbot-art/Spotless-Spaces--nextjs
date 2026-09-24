import IndustryPage, { industryMetadata } from "../_industry/IndustryPage";

export const metadata = industryMetadata("commercial");

export default function Page() {
  return <IndustryPage industry="commercial" />;
}
