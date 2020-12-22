export class FormCurrencyModel {
    constructor(
        public symbol: string,
        public base: string,
        public quantity?: number
    ) {  }
}