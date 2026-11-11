import Spinner from "../../ui/Spinner";
import { useBooking } from "../bookings/useBooking";
import { useSettings } from "../settings/useSettings";
import CheckinForm from "./CheckinForm";

function CheckinBooking() {
  const { booking, isPending } = useBooking();
  const { settings, isPending: isLoadingSettings } = useSettings();

  if (isPending || isLoadingSettings) return <Spinner />;

  return <CheckinForm booking={booking} settings={settings} />;
}

export default CheckinBooking;
