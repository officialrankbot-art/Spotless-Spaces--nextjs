import AreaPage, { areaMetadata } from "../_areas/AreaPage";

export const metadata = areaMetadata("ambler");

export default function Page() {
  return <AreaPage town="ambler" />;
}
