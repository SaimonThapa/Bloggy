import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name:'hmr-exclude',
      handleHotUpdate({file}){
        if(file.includes('db.json')){
          console.log('Skiping hmr update on file,', file)
          return[];
        }
      }
    }
  ],
  server: {
    hmr:{
      overlay:true
    }
  }

})
