import AreaPage, { areaMetadata } from "../_areas/AreaPage";

export const metadata = areaMetadata("horsham");

export default function Page() {
  return <AreaPage town="horsham" />;
}
