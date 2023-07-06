interface Review {
  name: string;
  content: string;
}

const ReviewItem = ({ name, content }: Review) => {
  return (
    <div className="flex-center">
      <article className="flex max-w-[560px] flex-col gap-3 border border-white p-2 md:p-5">
        <p className="text-bold">{name}</p>
        <p className="text-main">{content}</p>
      </article>
    </div>
  );
};

export default ReviewItem;
