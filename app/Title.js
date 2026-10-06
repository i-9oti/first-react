export default function Title({ num = "", name, str }) {
  return (
    <div className="title">
      <h1>{num}</h1>
      <h1>{name}</h1>
      <hr />
      <h3>{str}</h3>
    </div>
  );
}
