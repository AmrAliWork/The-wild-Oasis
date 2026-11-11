import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingout } = useCheckout();
  return (
    <Button
      disabled={isCheckingout}
      onClick={() => checkout(bookingId)}
      $variation="primary"
      $size="small"
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
