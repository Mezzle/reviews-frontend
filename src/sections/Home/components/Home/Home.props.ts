import { Restaurant } from '../../../../models/Restaurant';
import { Visit } from '../../../../models/Visit';

export interface HomeProps {
  restaurants?: Restaurant[];
  visits?: Visit[];
}
