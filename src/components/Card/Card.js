function Card(props) {
  return (
    <a href={props.navigate}>
      <div className="h-[20rem] p-5 bg-indigo-700 xl:w-[35rem]  2xl:w-[40rem] rounded-xl shadow-2xl hover:scale-105 hover:duration-700">
        <h1 className="font-bold text-white text-2xl bg-clip-text bg-gradient-to-r from-blue-300 via-purple-500 to-black-500 text-transparent">
          {props.title}
        </h1>
        <p className="text-white text-left mt-3">{props.description}</p>
        <div className="absolute bottom-5 text-lg inline-block hover:scale-110 hover:duration-500 text-blue-500">
          Click Here
        </div>
      </div>{" "}
    </a>
  );
}
export default Card;
