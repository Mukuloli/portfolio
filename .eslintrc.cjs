/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [
        "next/core-web-vitals",
        "plugin:jsx-a11y/recommended",
    ],
    plugins: ["jsx-a11y"],
    rules: {
        // Enforce alt text on images
        "jsx-a11y/alt-text": "error",
        // Enforce labels on form controls
        "jsx-a11y/label-has-associated-control": ["error", {
            assert: "either",
        }],
        // No non-interactive elements with click handlers
        "jsx-a11y/no-static-element-interactions": "warn",
        // No non-interactive elements with interactive handlers
        "jsx-a11y/no-noninteractive-element-interactions": "warn",
        // Clickable non-interactive elements must have keyboard listeners
        "jsx-a11y/click-events-have-key-events": "warn",
        // Anchors must have content
        "jsx-a11y/anchor-has-content": "error",
        // Anchors must be valid
        "jsx-a11y/anchor-is-valid": "warn",
        // Heading elements must have content
        "jsx-a11y/heading-has-content": "error",
        // Images must have alt text
        "jsx-a11y/img-redundant-alt": "warn",
        // No autofocus
        "jsx-a11y/no-autofocus": "warn",
        // Interactive elements must be focusable
        "jsx-a11y/interactive-supports-focus": "error",
        // Role attributes must be valid
        "jsx-a11y/role-has-required-aria-props": "error",
        // ARIA props must be valid
        "jsx-a11y/aria-props": "error",
        // ARIA state/prop values must be valid
        "jsx-a11y/aria-proptypes": "error",
    },
};
