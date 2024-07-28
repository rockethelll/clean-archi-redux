import { Container, Grid, Heading } from '@chakra-ui/react';
import TrainingCard from '@trainingsapp/components/TrainingCard/TrainingCard';
import DI from '@trainingsapp/di/ioc';
import type { Training } from '@trainingsapp/domain/models/training.interface';

export const DashboardPage = () => {
  const { trainings } = DI.resolve('DashboardViewModel');

  return (
    <>
      <Container
        position='relative'
        bg='gray.800'
        borderRadius='2rem'
        margin='2rem auto'
        paddingY='4.2rem'
        width='calc(100% - 3.2rem)'
        minHeight='55.6rem'
        maxWidth='auto'
      >
        <Heading
          fontSize='4rem'
          color='white'
          textAlign='center'
          fontWeight='300'
          data-testid='title-page'
        >
          Formations
        </Heading>

        <Grid
          templateColumns='repeat(auto-fill, 28.1rem)'
          gap='2rem'
          justifyContent='center'
          maxWidth='175rem'
          paddingY='3.2rem'
          margin='auto'
        >
          {trainings.map((training: Training, index: number) => (
            <TrainingCard key={training.id + index} training={training} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default DashboardPage;
