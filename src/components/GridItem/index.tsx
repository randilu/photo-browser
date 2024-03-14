import "./styles.css";

const GridItem = ({
  id,
  thumbnailUrl,
  reference,
}: {
  id: string;
  thumbnailUrl: string;
  reference?: any;
}) => {
  return (
    <button className="grid-item" ref={reference}>
      <img src={thumbnailUrl} alt="thumbnail" />
    </button>
  );
};

export default GridItem;
