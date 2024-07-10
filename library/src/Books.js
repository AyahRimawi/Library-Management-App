export default function Books({ id, title, author, isbn }) {
  return (
    <>
      <div
        style={{
          background: "white",
          boxShadow: "0px 10px 10px gray",
          color: "black",
          margin: "2rem",
          //   display: "flex",
          //   justifyContent: "spaceBetween",
        }}
      >
        <h5>{id}</h5>
        <h5>{title}</h5>
        <h5>{author}</h5>
        <h5>{isbn}</h5>
      </div>
    </>
  );
}
