import IndustryPage, { industryMetadata } from "../_industry/IndustryPage";

export const metadata = industryMetadata("warehouse");

export default function Page() {
  return <IndustryPage industry="warehouse" />;
}
