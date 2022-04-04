import { boot } from 'quasar/wrappers'
import ImageUploader from 'vue-image-upload-resize'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ( { app }) => {
  app.use(ImageUploader);
})
