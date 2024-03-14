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
    <div className="grid-item" ref={reference}>
      <img src={thumbnailUrl} alt="thumbnail" />
    </div>
  );
};

export default GridItem;