import './Rarity.scss'

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import nftCommon1Image from './assets/nft-common-1.png'

const rarity = [
    {
        title: 'Common',
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        slides: [
            nftCommon1Image,
            nftCommon1Image,
            nftCommon1Image,
            nftCommon1Image,
            nftCommon1Image
        ]
    },
    {
        title: 'Classic',
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        slides: [
            nftCommon1Image,
            nftCommon1Image,
            nftCommon1Image,
            nftCommon1Image,
            nftCommon1Image
        ]
    },
    {
        title: 'Rare',
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        slides: [
            nftCommon1Image,
            nftCommon1Image,
            nftCommon1Image,
            nftCommon1Image,
            nftCommon1Image
        ]
    },
    {
        title: 'Unique',
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        slides: [
            nftCommon1Image,
            nftCommon1Image,
            nftCommon1Image,
            nftCommon1Image,
            nftCommon1Image
        ]
    },
]

const Rarity = () => {
    return (
        <div id="rarity" className="section rarity">
            <h2>What About Rarity?</h2>
            {
              rarity.map((item, idx) => (
                <div key={idx} className="rarity__list">
                <h3>{ item.title }</h3>
                <p>{ item.body }</p>
                <div className="rarity__list-swiper">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        loop={true}
                        loopPreventsSlide={true}
                    >
                        {
                            item.slides.map((slideImage, slideIdx) => (
                                <SwiperSlide key={rarity.length + slideIdx}>
                                    <div className="rarity__slide">
                                        <img src={slideImage} width={411} height={411} alt="nft" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
            </div>
              ))  
            }
        </div>
    )
}

export default Rarity