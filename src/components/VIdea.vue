<script setup>
const Idea = [
    {
        img:{
            src: '/Schedule.svg',
            alt: 'Schedule',
        },
        text: {
            name: 'Составьте расписание',
            description: 'Выберите время, предмет и класс. Ученики получат уведомление о предстоящем уроке.',
        }
    },
    {
        img:{
            src: '/Docs.svg',
            alt: 'Docs',
        },
        text: {
            name: 'Подготовьте материал',
            description: 'Загружайте необходимые материалы к уроку.',
        }
    },
    {
        img:{
            src: '/Work.svg',
            alt: 'Work',
        },
        text: {
            name: 'Начните урок с учениками',
            description: 'Задавайте вопросы и вызывайте «к доске» детей с поднятой рукой.',
        }
    }
]
</script>

<template>
    <section class="idea">
        <div class="container">
            <div class="idea__title">
                <h2 class="title-2">Как это работает?</h2>
            </div>
            <div class="row">
                <div class="col-sm-12 col-lg-4" 
                v-for = "(item,index) in Idea"
                :key="index">
                    <div class="idea__card">
                        <img class="idea__card__img" :src="item.img.src" :alt="item.img.alt">
                        <div class="idea__card__text">
                            <a class="card__name">{{ item.text.name }}</a>
                            <p class="card__description">{{ item.text.description }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>