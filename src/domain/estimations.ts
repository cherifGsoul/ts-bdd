import { Estimation, EstimationId } from ".";

export interface Estimations {
    save(estimation: Estimation): Promise<void>;
    nextIdentity(): EstimationId.EstimationId;
    getForId(id: string): Promise<Estimation>;

}