import { IDrinksDataRepository } from 'drinks-company-data-repositories-contracts';
import { Drink } from 'drinks-company-models-contracts';

export default class DrinksDataRepository implements IDrinksDataRepository {
	getDrinks() : Promise<Drink[]> {
		return Promise.resolve([
			{
				name: 'Nice drink name here',
			},
		]);
	}
}
