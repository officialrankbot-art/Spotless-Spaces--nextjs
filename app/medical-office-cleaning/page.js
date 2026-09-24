import IndustryPage, { industryMetadata } from "../_industry/IndustryPage";

export const metadata = industryMetadata("medical");

export default function Page() {
  return <IndustryPage industry="medical" />;
}
