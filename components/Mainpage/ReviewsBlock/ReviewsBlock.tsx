"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReviewItem from "./ReviewItem/ReviewItem";

const ReviewsBlock = () => {
  const reviews = [
    {
      name: "Анна",
      content:
        "WebCult - это надежная и профессиональная студия веб-разработки. Они создали для меня превосходный сайт с удивительным дизайном. Я очень довольна результатом и рекомендую их всем своим друзьям.",
    },
    {
      name: "Иван",
      content:
        "Отличная работа от команды WebCult! Они быстро и качественно разработали для меня интернет-магазин. Профессиональный подход, отзывчивость и техническая поддержка на высшем уровне. Большое спасибо!",
    },
    {
      name: "Екатерина",
      content:
        "Я сотрудничала с WebCult при создании сайта для своего бизнеса. Они проявили отличное понимание моих потребностей и воплотили все мои идеи в реальность. Результат превзошел мои ожидания. Рекомендую!",
    },
    {
      name: "Михаил",
      content:
        "WebCult - это команда профессионалов. Они быстро и качественно разработали для меня корпоративный сайт. Я впечатлен их техническими знаниями и творческим подходом к работе. Рекомендую студию всем, кто ищет надежного партнера.",
    },
    {
      name: "Александра",
      content:
        "Я хотела создать личный блог и обратилась к WebCult. Их команда разработала для меня красивый и функциональный сайт. Они были открыты к моим идеям и внесли много полезных предложений. Я очень довольна результатом!",
    },
    {
      name: "Дмитрий",
      content:
        "WebCult - это надежный партнер для разработки веб-проектов. Они предоставили мне профессиональную помощь в создании корпоративного сайта для моей компании. Работа выполнена в сроки и соответствует самым высоким стандартам. Рекомендую!",
    },
  ];

  return (
    <section id="reviews">
      <p className="text-bold mb-5 mt-2">отзывы наших клиентов</p>
      <Swiper slidesPerView={1} spaceBetween={50}>
        {reviews.map((review) => {
          return (
            <SwiperSlide key={review.name}>
              <ReviewItem name={review.name} content={review.content} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default ReviewsBlock;
