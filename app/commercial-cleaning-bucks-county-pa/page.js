import AreaPage, { areaMetadata } from "../_areas/AreaPage";

export const metadata = areaMetadata("bucks-county");

export default function Page() {
  return <AreaPage town="bucks-county" />;
}
