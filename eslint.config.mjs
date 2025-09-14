import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...js.configs.recommended,
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["tailwind.config.js", "*.config.js"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        describe: true,
        test: true,
        it: true,
        expect: true,
      },
    },
  },
];
