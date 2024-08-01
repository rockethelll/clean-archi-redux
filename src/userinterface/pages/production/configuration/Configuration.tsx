import { Button, Container, Heading, HStack } from '@chakra-ui/react';
import { TextField } from '@trainingsapp/components/TextField/TextField';
import DI from '@trainingsapp/di/ioc';

interface TrainingConfigurationPageProps {
  edition?: boolean;
}

export const TrainingConfigurationPage = ({
  edition,
}: TrainingConfigurationPageProps) => {
  const { MIN_LENGTH_TITLE, MAX_LENGTH_TITLE } = DI.resolve(
    'TrainingConfigurationViewModel',
  );
  return (
    <>
      <form>
        <Container
          bg='gray.200'
          maxW='120rem'
          width='100%'
          paddingTop='6.2rem'
          borderRadius='2rem'
        >
          <Heading
            fontSize='4rem'
            textAlign='center'
            fontWeight='300'
            mb='3rem'
            data-testid='title-page'
          >
            {edition ? 'Édition' : 'Création'}
          </Heading>

          <TextField
            name='title'
            type='text'
            // value={training?.title}
            onChange={() => null}
            //onReset={training && Object.keys(training).length === 0}
            minLength={MIN_LENGTH_TITLE}
            maxLength={MAX_LENGTH_TITLE}
            testId='textfield-title'
          />

          <HStack mt='2rem' justify='center'>
            <Button
              type='submit'
              py='2.2rem'
              px='1.6rem'
              bg='black'
              fontSize='1.6rem'
              fontWeight='500'
              color='white'
              data-testid='submit-form-configuration'
              // onClick={onSubmit}
              _hover={{
                color: 'gray.800',
                bg: 'gray.500',
              }}
            >
              {/* {training?.id ? "Sauvegarder" : "Créer"} */}
            </Button>
          </HStack>
        </Container>
      </form>
    </>
  );
};

export default TrainingConfigurationPage;
