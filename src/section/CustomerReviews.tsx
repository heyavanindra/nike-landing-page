import {reviews} from "../constants/constants"
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
What Our <span className='text-coral-red'>Customers</span> Say?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, esse deleniti cupiditate impedit dolorem voluptas obcaecati necessitatibus. Recusandae veniam quisquam id consequuntur voluptatum fugiat, esse pariatur nostrum perspiciatis laboriosam odio.</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review,idx)=>(
          <ReviewCard key={idx} review={review}></ReviewCard>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews