import { Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import DI from '@trainingsapp/di/ioc';
import type { Training } from '@trainingsapp/domain/models/training.interface';
import {
  GroupConnectedIcon,
  RibbonIcon,
  VideoCallIcon,
} from '@trainingsapp/utils/ui-icons';
import { HiOutlinePuzzle } from 'react-icons/hi';

interface TrainingCardProps {
  training: Training;
}

const modalityIcons = [
  {
    type: 'E_LEARNING',
    icon: <RibbonIcon boxSize='20px' />,
  },
  {
    type: 'PRESENTIAL',
    icon: <GroupConnectedIcon boxSize='20px' />,
  },
  {
    type: 'VIRTUAL_CLASSROOM',
    icon: <VideoCallIcon boxSize='22px' />,
  },
  {
    type: 'MICRO_LEARNING',
    icon: <HiOutlinePuzzle size='24px' />,
  },
];

const TrainingCard = ({ training }: TrainingCardProps) => {
  const {
    bgTitleCard,
    colorTitleCard,
    handleMouseEnterCard,
    handleMouseLeaveCard,
  } = DI.resolve('TrainingCardViewModel');
  return (
    <Box>
      <Flex
        width='28rem'
        height='36rem'
        borderRadius='0.8rem'
        onMouseEnter={handleMouseEnterCard}
        onMouseLeave={handleMouseLeaveCard}
        cursor='pointer'
      >
        <Flex
          position='relative'
          flexDirection='column'
          height='100%'
          width='100%'
          // onClick={() =>
          //   handleNavigate("/production/presentation/", training.id)
          // }
          data-testid={`training-card-${training.id}`}
        >
          <Box
            position='relative'
            width='100%'
            height='26rem'
            bg='gray.400'
            borderTopRadius='0.8rem'
            overflow='hidden'
          >
            <HStack
              position='absolute'
              left='1.6rem'
              bottom='1.6rem'
              height='100%'
              spacing='0.4rem'
              alignItems='flex-end'
            >
              {modalityIcons?.map((element, index) =>
                training?.modalities?.map(
                  (modality) =>
                    modality === element.type && (
                      <VStack
                        key={index}
                        width='2.8rem'
                        height='2.8rem'
                        borderRadius='0.4rem'
                        bg={`modalities.${modality}`}
                        color='primary.0'
                        justifyContent='center'
                      >
                        {element.icon}
                      </VStack>
                    ),
                ),
              )}
            </HStack>

            <Image
              src={training?.thumbnail?.url}
              objectFit='cover'
              width='100%'
              height='100%'
              zIndex='1'
            />
          </Box>
          <Flex
            padding='1.6rem'
            height='10rem'
            borderBottomRadius='0.8rem'
            flexDirection='column'
            justifyContent='space-between'
            bg={bgTitleCard}
            transition='background 0.15s'
          >
            <Text
              color={colorTitleCard}
              fontSize='1.6rem'
              fontWeight='700'
              transition='background 0.15s'
            >
              {training?.title}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TrainingCard;
