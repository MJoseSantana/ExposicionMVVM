import { Model } from './Model';

// El ViewModel actúa como intermediario entre el Modelo y la Vista,
// exponiendo propiedades y comandos para que la Vista pueda enlazar y manejar eventos.
export class ViewModel {
    private model: Model;

    constructor(model: Model) {
        this.model = model;
    }

    public getData(): string {
        return this.model.data;
    }

    public setData(data: string): void {
        this.model.data = data;
    }
}
