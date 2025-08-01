import { Html } from "@react-three/drei";

const ResetBallsButton = ({ rerender }) => {
  return (
    <Html position={[4, 2.5, 0]}>
      <div
        onClick={rerender}
        className="cursor-pointer hover:scale-110 transition-transform"
      >
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 76 76"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          baseProfile="full"
          enable-background="new 0 0 76.00 76.00"
          style={{
            backgroundColor: "black",
            borderRadius: "20px",
            boxShadow: "2px 1px #ffff",
          }}
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill="#ffffff"
              fill-opacity="1"
              stroke-width="0.2"
              stroke-linejoin="round"
              d="M 19,45.9167L 25.6082,45.9167C 28.6524,49.3179 33.0762,51.4583 38,51.4583C 42.9238,51.4583 47.3476,49.3179 50.3918,45.9167L 58.5833,45.9167L 58.5833,57L 19,57L 19,45.9167 Z M 56.2083,48.2917L 53.4374,48.2917L 53.4374,53.0417L 56.2083,53.0417L 56.2083,48.2917 Z M 39.5833,33.25L 30.0833,23.75L 39.5833,14.25L 39.5833,20.6703C 46.7082,21.4579 52.25,27.4985 52.25,34.8333C 52.25,42.7034 45.8701,49.0833 38,49.0833C 30.1299,49.0833 23.75,42.7034 23.75,34.8333C 23.75,32.0174 24.5668,29.3923 25.9763,27.1819L 30.6522,30.1575C 29.7908,31.5083 29.2917,33.1125 29.2917,34.8333C 29.2917,39.6428 33.1905,43.5417 38,43.5417C 42.8095,43.5417 46.7083,39.6428 46.7083,34.8333C 46.7083,30.5646 43.6368,27.0132 39.5833,26.2686L 39.5833,33.25 Z "
            />{" "}
          </g>
        </svg>
      </div>
    </Html>
  );
};

export default ResetBallsButton;
