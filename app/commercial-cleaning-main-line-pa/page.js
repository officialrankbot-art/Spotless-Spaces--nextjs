import AreaPage, { areaMetadata } from "../_areas/AreaPage";

export const metadata = areaMetadata("main-line");

export default function Page() {
  return <AreaPage town="main-line" />;
}
