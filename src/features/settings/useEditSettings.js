import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingsAPI } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useEditSettings() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: updateSettings } = useMutation({
    mutationFn: updateSettingsAPI,
    onSuccess: () => {
      toast.success("Settings successfully Edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isUpdating, updateSettings };
}
