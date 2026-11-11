import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import Spinner from "../../ui/Spinner";
import { useLogout } from "./useLogout";
function Logout() {
  const { logout, isPending } = useLogout();
  return (
    <ButtonIcon disabled={isPending} onClick={logout}>
      {isPending ? <Spinner /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}

export default Logout;
