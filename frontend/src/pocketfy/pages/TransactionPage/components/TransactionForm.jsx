import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from 'formik';
import { startSetTransaction } from "../../../../store/pocketfy/thunks";
import { InputErrorMessage } from "../../../../components/form";
import dayjs from "dayjs";

const DepositsIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
}

export const TransactionForm = ({ type }) => {

  const { accounts, accountSelected, categories } = useSelector(state => state.pocketfy);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (values) => {
    if(type === "expense") {
      values.amount = -1 * values.amount;
    }
    // Save transaction
    dispatch( startSetTransaction(values) );

    navigate(-1);
  }

  return (
    <div className="bg-base-300 animate__animated animate__fadeInUp rounded-md overflow-hidden">

      <div className="bg-primary flex items-center justify-between p-2">

        <h2 className="text-lg font-black text-white">New {type}</h2>

        <button
          onClick={ () => navigate(-1) }
          className="btn btn-square btn-outline ml-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

      </div>

      <Formik
        onSubmit={onSubmit}
        initialValues={{
          amount: "",
          description: "",
          category: "",
          account: accountSelected?.id,
          date: new Date().toISOString().slice(0, 10),
        }}
        validate={(values) => {
          let errors = {};
          if (values.amount <= 0 || values.amount > 100000) {
            errors.amount = "The Amount should be between 0 and 100000";
          }
          if (values.category == '' || values.category === undefined) {
            errors.category = "Choose a category";
          }
          if (values.account == '' || values.account === undefined) {
            errors.account = "Choose a account";
          }
          if (!dayjs(values.date).isValid()) {
            errors.date = "Choose a valid date";
          }
          if (values.description.length > 100) {
            errors.description = "The Description should be less than 100 characters";
          }
          return errors;
        }}
      >
        {({ touched, values, errors, isValid }) => (
          <Form>
            <div className="px-3 py-5 grid place-items-center space-y-5">

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Amount</span>
                </label>
                <div className="flex rounded-md overflow-hidden">
                  <div className="bg-primary flex items-center px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <Field
                    type="number"
                    className="w-full bg-primary text-white font-black input-primary max-w-xs text-6xl text-right focus:outline-none focus:bg-primary-focus px-1"
                    placeholder="0.00"
                    name="amount"
                  />
                </div>
                {touched.amount && errors.amount && 
                  <div className="mt-3">
                    <InputErrorMessage message={errors.amount}/>
                  </div>
                }
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Description (optionally)</span>
                </label>
                <Field
                  type="number"
                  as="textarea"
                  rows="4"
                  name="description"
                  className={`textarea textarea-bordered resize-none ${touched.description && errors.description ? "textarea-error" : ""}`}
                />
                {touched.description && errors.description && 
                  <div className="mt-3">
                    <InputErrorMessage message={errors.description}/>
                  </div>
                }
              </div>

              <div className="w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Choose a category</span>
                </label>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category, key) => (
                    <label 
                      key={ key }
                      htmlFor={`category-${category.id}`}
                      className={`flex flex-col justify-center items-center h-16 w-16 rounded-md hover:bg-primary cursor-pointer transition ${category.id == values.category ? "text-white bg-primary-focus" : "bg-neutral"}`
                      }
                    >
                      <DepositsIcon />
                      {category.name}
                      <Field
                        type="radio"
                        name="category"
                        className="hidden"
                        value={parseInt(category.id)}
                        id={`category-${category.id}`}
                      />
                    </label>
                  ))}
                </div>
                {touched.category && errors.category && 
                  <div className="mt-3">
                    <InputErrorMessage message={errors.category}/>
                  </div>
                }
              </div>

              <div className="w-full max-w-xs">

                <label className="label">
                  <span className="label-text">Choose a account</span>
                </label>

                <div className="flex flex-wrap gap-2">
                  {
                    accounts.map((account, key) => (
                        <label 
                          key={ key }
                          htmlFor={`account-${account.id}`}
                          className={`p-2 rounded-md hover:bg-primary cursor-pointer transition ${account.id == values.account ? "text-white bg-primary-focus" : "bg-neutral"}`}
                        >
                          {account.name}
                          <Field
                            type="radio"
                            name="account"
                            className="hidden"
                            value={parseInt(account.id)}
                            id={`account-${account.id}`}
                          />
                        </label>
                    ))
                  }
                </div>
                {touched.account && errors.account && 
                  <div className="mt-3">
                    <InputErrorMessage message={errors.account}/>
                  </div>
                }

              </div>

              <div className="w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <div className="flex">
                  <Field
                    className="p-1"
                    type="date"
                    name="date"
                  />
                </div>
                {touched.date && errors.date && 
                  <div className="mt-3">
                    <InputErrorMessage message={errors.date}/>
                  </div>
                }
              </div>

              <div className="w-full max-w-xs">
                <button 
                  className={`btn btn-primary w-full ${!isValid ? "btn-disabled" : ""}`}
                  type="submit"
                >Save</button>
              </div>

            </div>
          </Form>
        )}
      </Formik>

    </div>
  )
}
