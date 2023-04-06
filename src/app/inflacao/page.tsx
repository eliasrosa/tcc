export default function PageInflacao() {
  return (
    <>
      <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-lightBlue-500">
        <span className="text-xl inline-block mr-5 align-middle">
          <i className="fas fa-bell"></i>
        </span>
        <span className="inline-block align-middle mr-8">
          <b className="capitalize">lightBlue!</b> This is a lightBlue alert -
          check it out!
        </span>
        <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
          <span>×</span>
        </button>
      </div>
    </>
  )
}
