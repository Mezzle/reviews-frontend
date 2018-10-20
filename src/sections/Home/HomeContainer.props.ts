import { Restaurant } from '../../models/Restaurant';

export interface HomeContainerProps {
  load: () => any;
  restaurants?: Restaurant[];
}
