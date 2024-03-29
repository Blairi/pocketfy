import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { TransactionForm } from "./components/TransactionForm";

export const NewTransactionPage = () => {

  const { type } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (type != "expense" && type != "income") {
      navigate("/home");
    }
  }, []);

  return (
    <div className="py-5 min-h-screen w-[90%] max-w-[1280px] mx-auto">
      <TransactionForm type={ type }/>
    </div>
  )
}
