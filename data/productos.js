import Paleta from '../models/paleta';
import Agua from '../models/agua';

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