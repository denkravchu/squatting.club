import './Rarity.scss'

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import nftCommon1Image from './assets/nft-common-1.png'

const rarity = [
    {

    },
    {

    }
]

const Rarity = () => {
    return (
        <div className="section rarity">
            <h2>What About Rarity?</h2>
            <div className="rarity__list">
                <h3>Common</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="rarity__list-swiper">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        loop={true}
                        loopPreventsSlide={true}
                    >
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="rarity__list">
                <h3>Classic</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="rarity__list-swiper">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        loop={true}
                        loopPreventsSlide={true}
                    >
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="rarity__list">
                <h3>Rare</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="rarity__list-swiper">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        loop={true}
                        loopPreventsSlide={true}
                    >
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="rarity__list">
                <h3>Unique</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="rarity__list-swiper">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        loop={true}
                        loopPreventsSlide={true}
                    >
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rarity__slide">
                                <img src={nftCommon1Image} width={411} height={411} alt="nft" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Rarity