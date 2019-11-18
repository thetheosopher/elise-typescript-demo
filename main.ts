import * as elise from 'elise-graphics';

const hostDiv = document.getElementById('elise-host') as HTMLDivElement;
var model = elise.Model.create(100, 100).setFill('Blue');
var rect = elise.EllipseElement.create(50, 50, 40, 40).setFill('Red');
model.add(rect);
elise.view(hostDiv, model);
