import "./styles.css";

const GridItem = ({
  id,
  thumbnailUrl,
  ref,
}: {
  id: string;
  thumbnailUrl: string;
  ref?: any;
}) => {
  return (
    <div key={id} className="grid-item" ref={ref}>
      <img src={thumbnailUrl} alt="thumbnail" />
    </div>
  );
};

export default GridItem;
