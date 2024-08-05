import { useState } from 'react';
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from '@chakra-ui/react';

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      src: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'The perfect latte',
      description:
        'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
    },
    {
      src: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Italian night',
      description: 'Order from the best Italian restaurants and baristas.',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="nav-button prev" onClick={handlePrev}>
        ‹
      </button>
      <div className="carousel">
        <div
          className="card-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              className="card"
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                className="image-card"
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                src={card.src}
                alt={card.title}
              />
              <Stack>
                <CardBody className="card-body">
                  <Heading size="bd">{card.title}</Heading>
                  <Text py="5">{card.description}</Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Stack>
            </Card>
          ))}
        </div>
      </div>
      <button className="nav-button next" onClick={handleNext}>
        ›
      </button>
    </div>
  );
}
