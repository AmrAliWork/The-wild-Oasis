import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { isPending: isLoadingTodayActivitys, data: todayActivitys } = useQuery(
    {
      queryFn: getStaysTodayActivity,
      queryKey: ["toady-activity"],
    },
  );
  return { isLoadingTodayActivitys, todayActivitys };
}
