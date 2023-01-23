declare const Parser: {
    new (path: string): {
        files: Map<string, string>;
        code: string;
        setup(path: string): void;
    };
};
export default Parser;
//# sourceMappingURL=Parser.d.ts.map