# Unity WebGL Website Integration Guide

This guide will help you integrate your Unity WebGL build into the React website we've created.

## Prerequisites

- A Unity WebGL build of your game
- Node.js and npm/pnpm installed on your computer

## Step 1: Prepare Your Unity WebGL Build

1. Open your Unity project
2. Go to File > Build Settings
3. Select WebGL as the platform
4. Click on "Player Settings" and configure:
   - Resolution and Presentation: Set to your preferred dimensions
   - Compression Format: Use Brotli or Gzip for better performance
   - Publishing Settings: Enable "Decompression Fallback"
5. Click "Build" and select a folder to save your build

## Step 2: Add Your Unity WebGL Build to the Website

1. Create a folder named `unity` in the `public` directory of the React project
2. Copy all files from your Unity WebGL build into this folder
3. Your structure should look like:
   ```
   public/
   └── unity/
       ├── Build/
       │   ├── your-game-name.data
       │   ├── your-game-name.framework.js
       │   ├── your-game-name.loader.js
       │   └── your-game-name.wasm
       ├── TemplateData/
       │   └── (various Unity template files)
       └── index.html
   ```

## Step 3: Update the UnityGame Component

Open `src/components/unity/UnityGame.tsx` and update the component props:

```tsx
<UnityGame 
  loaderUrl="/unity/Build/your-game-name.loader.js"
  dataUrl="/unity/Build/your-game-name.data"
  frameworkUrl="/unity/Build/your-game-name.framework.js"
  codeUrl="/unity/Build/your-game-name.wasm"
  gameTitle="Your Game Title"
/>
```

## Step 4: Add Unity Loader Script

Add the Unity loader script to your `index.html` file:

1. Open `index.html` in the project root
2. Add the following script tag before the closing `</head>` tag:
   ```html
   <script id="unity-loader" src="/unity/Build/your-game-name.loader.js"></script>
   ```

## Step 5: Modify the UnityGame Component (Optional)

If your Unity WebGL build uses a different initialization method, you may need to modify the `UnityGame.tsx` component. The current implementation is designed to work with most standard Unity WebGL builds.

## Step 6: Test Your Integration

1. Run the development server with `pnpm run dev`
2. Open your browser to `http://localhost:5173`
3. Verify that your Unity game loads and plays correctly

## Step 7: Build for Production

When you're ready to deploy:

1. Run `pnpm run build`
2. The production-ready files will be in the `dist` directory
3. Deploy these files to your web hosting service

## Troubleshooting

- **Game doesn't load**: Check browser console for errors. Ensure all paths to Unity files are correct.
- **CORS errors**: If testing locally, you may need to run a local server for the Unity files.
- **Performance issues**: Consider optimizing your Unity build settings for WebGL.

## Additional Resources

- [Unity WebGL Documentation](https://docs.unity3d.com/Manual/webgl-building.html)
- [React Documentation](https://react.dev/learn)
