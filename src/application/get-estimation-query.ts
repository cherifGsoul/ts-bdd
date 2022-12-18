import { Estimations } from "../domain/estimations"
import * as EstimationViewModel from "./estimation.viewmodel"

export type GetEstimationQuery = Record<'id', string>

export class GetEstimationQueryHandler {
    #estimations: Estimations

    constructor(estimations: Estimations) {
        this.#estimations = estimations
    }

    public async handle(query: GetEstimationQuery): Promise<EstimationViewModel.EstimationViewModel> {
        const estimation = await this.#estimations.getForId(query.id)
        return EstimationViewModel.fromModel(estimation)
    }
}