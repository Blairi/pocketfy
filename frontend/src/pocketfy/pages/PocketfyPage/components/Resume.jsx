export const Resume = ({ type, amounts }) => {
  return (
    <div className="bg-neutral rounded-md space-y-2 animate__animated animate__backInUp">
      {
        Object.keys(amounts[type]).map((category, index) => (
          <div
            key={index}
            className="flex justify-between text-neutral-content px-2 py-3"
          >
            <h6 className="capitalize">
              {category}
            </h6>
            <span className="text-white">
              {
                amounts[type][category] < 0
                  ? `-$${amounts[type][category] * -1}`
                  : `$ ${amounts[type][category]}`
              }
            </span>
          </div>
        ))
      }
    </div>
  )
}
