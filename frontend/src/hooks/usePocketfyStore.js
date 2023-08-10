import { useDispatch, useSelector } from "react-redux"

export const usePocketfyStore = () => {
  const dispatch = useDispatch();

  const {
  } = useSelector(state => state.pocketfy);

  return {
    // Properties

    //Methods
  }
}
