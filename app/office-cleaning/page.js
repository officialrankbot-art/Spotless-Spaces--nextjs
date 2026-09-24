import IndustryPage, { industryMetadata } from "../_industry/IndustryPage";

export const metadata = industryMetadata("office");

export default function Page() {
  return <IndustryPage industry="office" />;
}
