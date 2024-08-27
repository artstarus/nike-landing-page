import ReviewCard from "../components/ReviewCard";
import {reviews} from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl text-center font-bold">
        What Do Our 
        <span className="text-coral-red"> Customers</span> Have To Say?
      </h3>
      <p className="text-center info-text max-w-lg mt-4 m-auto">Discover authentic testimonials from our delighted customers, showcasing their exceptional experiences with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews