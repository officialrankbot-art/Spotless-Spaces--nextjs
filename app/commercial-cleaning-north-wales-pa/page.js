import AreaPage, { areaMetadata } from "../_areas/AreaPage";

export const metadata = areaMetadata("north-wales");

export default function Page() {
  return <AreaPage town="north-wales" />;
}
