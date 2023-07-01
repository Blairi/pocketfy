
export const Loading = () => {
  return (
    <div 
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="absolute w-full h-full top-0 left-0 grid place-items-center"
    >
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  )
}
