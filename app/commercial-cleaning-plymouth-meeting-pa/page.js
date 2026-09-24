import AreaPage, { areaMetadata } from "../_areas/AreaPage";

export const metadata = areaMetadata("plymouth-meeting");

export default function Page() {
  return <AreaPage town="plymouth-meeting" />;
}
