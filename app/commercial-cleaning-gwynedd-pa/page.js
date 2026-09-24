import AreaPage, { areaMetadata } from "../_areas/AreaPage";

export const metadata = areaMetadata("gwynedd");

export default function Page() {
  return <AreaPage town="gwynedd" />;
}
