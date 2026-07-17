import star from "../../assets/decorations/chrome-star-1.png";

type Props = {
  top: string;
  left: string;
  size?: number;
};

export default function ChromeStar({
  top,
  left,
  size = 64,
}: Props) {
  return (
    <img
      src={star}
      alt=""
      className="floatingDecoration"
      style={{
        top,
        left,
        width: size,
      }}
    />
  );
}