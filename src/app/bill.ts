export class Bill {
    constructor(
        public id: number,
        public description: string,
        public amount: number,
        public friends: string[],
        public paidBy: any
    ) {}
}
