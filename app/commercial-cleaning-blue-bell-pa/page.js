import AreaPage, { areaMetadata } from "../_areas/AreaPage";

export const metadata = areaMetadata("blue-bell");

export default function Page() {
  return <AreaPage town="blue-bell" />;
}
