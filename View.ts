import { ViewModel } from './ViewModel';

// La Vista es responsable de mostrar los datos al usuario y manejar las interacciones del usuario con la aplicación.
export class View {
    private viewModel: ViewModel;

    constructor(viewModel: ViewModel) {
        this.viewModel = viewModel;
    }

    public displayData(): void {
        console.log(this.viewModel.getData());
    }

    public updateData(data: string): void {
        this.viewModel.setData(data);
    }
}
