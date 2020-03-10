module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
<<<<<<< HEAD
    ? '/QualiQuiz'
=======
    ? '/qualiz-saude/'
>>>>>>> a9622ecc32a35b8a1fe479deaa7166ea5f7b0dd0
    : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
          @import "@/styles/_functions.scss";
        `
      }
    }
  }
}
