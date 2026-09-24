import IndustryPage, { industryMetadata } from "../_industry/IndustryPage";

export const metadata = industryMetadata("dealership");

export default function Page() {
  return <IndustryPage industry="dealership" />;
}
