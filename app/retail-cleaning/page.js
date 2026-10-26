import IndustryPage, { industryMetadata } from "../_industry/IndustryPage";

export const metadata = industryMetadata("retail");

export default function Page() {
  return <IndustryPage industry="retail" />;
}
