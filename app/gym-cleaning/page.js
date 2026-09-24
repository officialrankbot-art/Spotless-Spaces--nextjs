import IndustryPage, { industryMetadata } from "../_industry/IndustryPage";

export const metadata = industryMetadata("fitness");

export default function Page() {
  return <IndustryPage industry="fitness" />;
}
