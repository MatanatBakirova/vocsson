// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import './Books.css'
import BookItem from "./BookItem.jsx";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";

const Books = () => {


    const [bookList, setBookList] = useState([])

    useEffect(() => {

        const USER_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLnZvY2FidWxhcnkuYXovYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTA0Mjg1NjAsImV4cCI6MTczMzc1NjU2MCwibmJmIjoxNzEwNDI4NTYwLCJqdGkiOiJKR3dvMHJReWtSNk40bXMwIiwic3ViIjoiOTU3OCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.7EpzzGQd6H0zfdQf5VXR7tox2HlYizkXsV_jAjHshZA';

        const api = 'https://api.vocabulary.az/api/books/list'
        axios.get(api, {
            headers: {
                'Authorization': `Bearer ${USER_TOKEN}`
            }

        })
            .then(response => setBookList(response.data.data))
            .catch((err) => console.log('Serverdə xəta: ' + err))

    }, []);

    return (
            <section className='mt-4' style= {{width: "1024px"}}>
                <div className='fs-4 fw-semibold'>Books</div>
                {/* <div className="container"> */}
                    <Swiper
                        spaceBetween={200}
                        slidesPerView={3}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            }
                        }}>

                    <div className="col-12 col-md-6 col-lg-4">
                        {bookList && bookList.map(bookData => (
                            <SwiperSlide>
                                <BookItem key={bookData.id}
                                            title={bookData.title}
                                            image={bookData.image}
                                            author={bookData.author}
                                            free={bookData.free}
                                            price={bookData.price}
                                            discount={bookData.discount}
                                            discount_price={bookData.discount_price}
                                />
                            </SwiperSlide>
                        ))}
                    </div>

                    </Swiper>
                {/* </div> */}

            </section>
    )
}

export default Books