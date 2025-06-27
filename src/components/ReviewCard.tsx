import { star } from "../assets/icons";

type ReviewCardProps = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
};

const ReviewCard = ({ review }: { review: ReviewCardProps }) => {
  return (
    <div className="rounded-2xl  py-3 flex flex-col justify-center items-center gap-10 px-3">
      <div className="">
        <img
          height={100}
          width={100}
          src={review.imgURL}
          alt={review.customerName}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center text-neutral-600 max-w-sm gap-2">
        <p>{review.feedback}</p>
        <h6 className="mt-1 flex gap-x-2"><span><img src={star} alt="" className="w-5" /></span>({review.rating})</h6>
        <p className="mt-1 font-bold text-black font-montserrat max-w-sm">{review.customerName}</p>
        <div className="flex gap-1"></div>
      </div>
    </div>
  );
};

export default ReviewCard;
