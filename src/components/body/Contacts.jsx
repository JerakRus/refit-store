import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import GoogleMap from './GoogleMap';

const Contacts = () => {

    return (
        <Container text textAlign='left'>
            <Header as='h2'>Немного о Нас</Header>
            <p>
                Компания «RefitStore» была открыта 7 февраля 2015 года в городе Мытищи.
                За это время компания успела успешно зарекомендовать себя на рынке услуг по предоставлению качественного ремонта цифровой техники, как надежный и проверенный временем партнер.
            </p>
            <p>
                Несмотря на то, что основное направление компании-ремонт техники Apple, у нас большой опыт работы в сфере IT
                технологий, и он позволил нам сформировать для себя большую базу знаний в области ремонта плееров, смартфонов,
                планшетов и другой цифровой техники. Успешно были налажены каналы поставок запчастей для ремонта техники от местных складов до поставок напрямую с заводов изготовителей.
                Компания имеет собственный склад комплектующих, который постоянно поддерживает в наличии все востребованные элементы и детали для ремонта Вашей техники
                что дает неоспоримое преимущество при формировании конечной цены и сроков выполнения работы.
                Мы принимаем в ремонт технику, которую в других сервисах Вам не смогли отремонтировать.
            </p>
            <GoogleMap />
        </Container>
    );
}

export default Contacts;