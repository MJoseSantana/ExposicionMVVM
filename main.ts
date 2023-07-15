import { Model } from './Model';
import { ViewModel } from './ViewModel';
import { View } from './View';

// Crear instancias de cada componente
const model = new Model('¡Hola a todos!');
const viewModel = new ViewModel(model);
const view = new View(viewModel);

// La Vista muestra los datos del Modelo a través del ViewModel
view.displayData(); // Output: Hello, World!

// La Vista actualiza los datos del Modelo a través del ViewModel
view.updateData('¡Hola, MVVM!');
view.displayData(); // Output: Hello, MVVM!
