import Paleta from '../models/paleta';
import Agua from '../models/agua';
import Ingrediente from '../models/ingrediente';
import Empleado from '../models/empleado';
import Venta from '../models/venta';

export const PALETAS = [
	new Paleta('paP','agua','Piña','15','30'),
	new Paleta('paF','agua','Fresa','15','24'),
	new Paleta('paC','agua','Coco','15','13'),
	new Paleta('paL','agua','Limon','15','12'),
	new Paleta('pcN','crema','Nuez','18','28'),
	new Paleta('pcF','crema','Fresa','18','24'),
	new Paleta('pcC','crema','Coco','18','20'),
	new Paleta('pcV','crema','Vainilla','18','21')
];

export const AGUAS = [
	new Agua('amJ','media','Jamaica','18','1'),
	new Agua('agJ','grande','Jamaica','23','1'),
	new Agua('amL','media','Limon','18','1'),
	new Agua('agL','grande','Limon','23','0'),
	new Agua('amF','media','Frutas','18','1'),
	new Agua('agF','grande','Frutas','23','0')
];

export const INGREDIENTES = [
	new Ingrediente('kL1', '3', 'Kilo de limon', 'Si' ),
	new Ingrediente('kF1', '4', 'Kilo de Fresa', 'Si' ),
	new Ingrediente('kC1', '6', 'Kilo de Coco', 'Si' ),
	new Ingrediente('kN1', '2', 'Kilo de Naranja', 'Si' ),
	new Ingrediente('lC1', '30', 'Litro de Crema', 'Si' ),
	new Ingrediente('lCh1', '3', 'Litro de chocolate', 'Si' ),
	new Ingrediente('lLe1', '0', 'Litro de Lechera', 'No' )
];

export const EMPLEADOS = [
	new Empleado('sa0','Sa','20','Jefe','3')
];

export const VENTAS = [
	new Venta('09112019_135235','pcF,paF,pcV','42'),
	new Venta('09112019_125120','pcV,paP','124'),
	new Venta('09112019_115235','amJ,pcN','33'),
	new Venta('04112019_101045','paL','18'),
	new Venta('03112019_101045','agJ','23'),
	new Venta('02112019_101045','amJ','23'),
	new Venta('01112019_101045','amJ,pcN','33'),
	new Venta('25102019_110950','agF,pcF,','38'),
	new Venta('25102019_090950','amF','18')
];