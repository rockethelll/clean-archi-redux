export type TrainingThumbnail = {
  url: string;
};

export enum Modality {
  E_LEARNING = 'E_LEARNING',
  PRESENTIAL = 'PRESENTIAL',
  VIRTUAL_CLASSROOM = 'VIRTUAL_CLASSROOM',
  MICRO_LEARNING = 'MICRO_LEARNING',
}

export type Training = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  thumbnail: TrainingThumbnail;
  modalities: Modality[];
};
