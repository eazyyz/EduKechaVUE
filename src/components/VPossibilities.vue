<script setup>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { onMounted } from 'vue';
import { Pagination } from 'swiper/modules';

const possibilities = [
    {
        classname: 'opportunities__card nechet',
        img: {
            src: '/Chat.svg',
            alt: 'xdidk',
        },
        text: {
            name: 'Общение с классом',
            description1: 'Видеосвязь',
            description2: 'Чат с классом',
            description3: ''
        }
    },
    {
        classname: 'opportunities__card chet',
        img: {
            src: '/Lections.svg',
            alt: 'lection',
        },
        text: {
            name: 'Проведение занятий',
            description1: 'Презентация файлов',
            description2: 'Демонстрация экрана',
            description3: ''
        }
    },
    {
        classname: 'opportunities__card nechet',
        img: {
            src: '/Check.svg',
            alt: 'check',
        },
        text: {
            name: 'Посещаемость',
            description1: 'Автоматическое',
            description2: 'отслеживание',
            description3: 'присутствующих'
        }
    },
    {
        classname: 'opportunities__card chet',
        img: {
            src: '/Hist.svg',
            alt: 'hist',
        },
        text: {
            name: 'История занятий',
            description1: 'Материалы урока',
            description2: '',
            description3: ''
        }
    },
];

onMounted(() => {
    const swiper = new Swiper('.swiper1', {
        modules: [Pagination],
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
});
</script>

<template>
    <section class="possibilities">
        <div class="container">
            <div class="possibilities__title">
                <h2 class="title-2">Возможности</h2>
            </div>
            <div class="row">
                <div class="swiper-container">
                    <div class="swiper1">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item, index) in possibilities" :key="index">
                                <div :class="item.classname">
                                    <img class="card__img" :src="item.img.src" :alt="item.img.alt">
                                    <h3 class="card__name">{{ item.text.name }}</h3>
                                    <p class="card__description">{{ item.text.description1 }} <br>
                                        {{ item.text.description2 }} <br>
                                        {{ item.text.description3 }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.swiper1 {
    overflow: hidden;
}

.swiper-pagination {
    position: relative;
    bottom: 0;
    margin-top: 8px;
    justify-content: center;
    display: none;

    @media (max-width: 991px) {
            display: flex;
        }
}

.swiper1 {
    width: 100%;
    height: 110%;
}

.swiper-slide {
    max-width: 100%;
}
</style>
