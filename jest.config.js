module.exports = {
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    testMatch: [
      "**/tests/**/*.spec.ts",
      "**/tests/**/*.test.ts",
    ],
    testEnvironment: "node",
  };