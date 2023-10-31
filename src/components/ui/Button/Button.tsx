const buttonStyle = {};

const MyButton = ({ children }: any) => {
  return (
    <div>
      <button
        className=" hover:bg-black transform hover:scale-105 transition duration-300 text-white px-4 py-2 cursor-pointer"
        style={{
          border: "none",
          background: "#3CAA9F",
          color: "#fff",
          padding: "15px 25px",
          fontSize: "20px",
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default MyButton;
