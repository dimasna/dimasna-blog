import 'tailwindcss/tailwind.css';
import '../styles.css'
import '../public/feather-sprite.svg'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}