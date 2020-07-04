"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DrinksDataRepository = /** @class */ (function () {
    function DrinksDataRepository() {
    }
    DrinksDataRepository.prototype.getDrinks = function () {
        return Promise.resolve([
            {
                name: 'Nice drink name here',
            },
        ]);
    };
    return DrinksDataRepository;
}());
exports.default = DrinksDataRepository;
