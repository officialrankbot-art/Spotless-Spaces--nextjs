import IndustryPage, { industryMetadata } from "../_industry/IndustryPage";

export const metadata = industryMetadata("eyecare");

export default function Page() {
  return <IndustryPage industry="eyecare" />;
}
