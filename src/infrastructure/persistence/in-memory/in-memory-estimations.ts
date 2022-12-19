import { Estimation, Estimations, EstimationId } from '../../../domain';
import { v4 } from 'uuid';

export class InMemoryEstimations implements Estimations {
  #estimations: Map<string, Estimation> = new Map();

  public async getForId(id: EstimationId.EstimationId): Promise<Estimation> {
    const estimation = this.#estimations.get(id.toString());
    if (!estimation) throw new Error('estimation can not be found');
    return estimation;
  }

  public nextIdentity(): EstimationId.EstimationId {
    return EstimationId.fromString(v4());
  }

  public async save(estimation: Estimation): Promise<void> {
    this.#estimations.set(estimation.id.toString(), estimation);
  }
}
