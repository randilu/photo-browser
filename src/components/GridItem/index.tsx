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
    <a className="grid-item" ref={reference} href={`/photos/${id}`}>
      <img src={thumbnailUrl} alt="thumbnail" />
    </a>
  );
};

export default GridItem;
