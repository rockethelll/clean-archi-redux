import { useState } from 'react';

const COLOR_TITLE_CARD = 'black';
const BG_TITLE_CARD = 'primary.0';

export function TrainingCardViewModel() {
  const [colorTitleCard, setColorTitleCard] = useState(COLOR_TITLE_CARD);
  const [bgTitleCard, setBgTitleCard] = useState(BG_TITLE_CARD);

  const handleMouseEnterCard = () => {
    setColorTitleCard('primary.0');
    setBgTitleCard('gray.700');
  };

  const handleMouseLeaveCard = () => {
    setColorTitleCard(COLOR_TITLE_CARD);
    setBgTitleCard(BG_TITLE_CARD);
  };

  return {
    colorTitleCard,
    bgTitleCard,
    handleMouseEnterCard,
    handleMouseLeaveCard,
  };
}
