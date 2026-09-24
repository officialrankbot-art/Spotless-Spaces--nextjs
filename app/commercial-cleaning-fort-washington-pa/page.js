import AreaPage, { areaMetadata } from "../_areas/AreaPage";

export const metadata = areaMetadata("fort-washington");

export default function Page() {
  return <AreaPage town="fort-washington" />;
}
