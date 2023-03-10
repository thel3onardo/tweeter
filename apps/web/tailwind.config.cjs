const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: 'Noto Sans',
        poppins: 'Poppins'
      }
    }
  },
  plugins: [require('@skeletonlabs/skeleton/tailwind/skeleton.cjs'), require('@tailwindcss/forms')]
};

module.exports = config;
