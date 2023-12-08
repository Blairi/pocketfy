import { LoadingOverlay } from "../../../components/ui";
import { usePocketfyStore } from "../../../hooks";
import { PocketfyLayout } from "../../layout/PocketfyLayout";
import { Home } from "./components";

export const PocketfyPage = () => {
  const { isLoading } = usePocketfyStore();
  return (
    <PocketfyLayout>
      {
        !isLoading 
          ? <Home />
          : <LoadingOverlay />
      }
    </PocketfyLayout>
  )
}
