export declare class Fraction {
    private static maximumAllowedNumber;
    private numerator;
    private denominator;
    private realValue;
    static max(f1: Fraction, f2: Fraction): Fraction;
    static Equal(f1: Fraction, f2: Fraction): boolean;
    static createFromFraction(fraction: Fraction): Fraction;
    static plus(f1: Fraction, f2: Fraction): Fraction;
    static minus(f1: Fraction, f2: Fraction): Fraction;
    private static greatestCommonDenominator(a, b);
    constructor(numerator?: number, denominator?: number, simplify?: boolean);
    toString(): string;
    clone(): Fraction;
    Numerator: number;
    Denominator: number;
    readonly RealValue: number;
    multiplyWithFactor(factor: number): void;
    multiplyDenominatorWithFactor(factor: number): void;
    Add(fraction: Fraction): void;
    Sub(fraction: Fraction): void;
    Quantize(maxAllowedDenominator: number): Fraction;
    Equals(obj: Fraction): boolean;
    CompareTo(obj: Fraction): number;
    lt(frac: Fraction): boolean;
    lte(frac: Fraction): boolean;
    GetInversion(): Fraction;
    private setRealValue();
    private simplify();
}
