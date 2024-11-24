# Character Multi-Select App
This project is a fully responsive **Character Multi-Select Application** built using React Native, Zustand, and TanStack Query. It allows users to search and select characters from the **Rick and Morty API**, providing a smooth and modern user experience.
## :rocket: Features
- **Search Functionality**: Type in the search bar to find characters by name.
- **Multi-Select**: Select multiple characters with ease.
- **Real-Time Updates**: Data is fetched dynamically from the Rick and Morty API.
- **Character Highlights**: Highlight search terms in character names.
- **Custom Design**: Modern and minimalist design inspired by NativeWind styling.
## :hammer_and_wrench: Technologies
### Core Stack:
- **React Native**: Cross-platform development for iOS and Android.
- **Expo**: Streamlined development environment.
- **TanStack Query**: For fetching and caching data.
- **Zustand**: State management made simple and intuitive.
- **Rick and Morty API**: Provides data for characters.
### Styling:
- **NativeWind**: TailwindCSS-inspired utility-based styling for React Native.
- **Custom Components**: Clean and modular design system.
---
## :building_construction: Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/tugceergun/RickAndMortyMultiSelect.git
   cd RickAndMortyMultiSelect
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npx expo start or npm run anroid / ios or npm run start
   ```
4. Open the app in your preferred emulator or Expo Go app.
---
## :book: Usage
1. **Search Characters**:
   - Use the search bar to look for Rick and Morty characters by name.
   - Results will be displayed as you type.
2. **Select Characters**:
   - Tap on a character to select them.
   - Selected characters are displayed above the search bar.
3. **Deselect Characters**:
   - Tap on the "×" icon next to a selected character to remove them.
4. **View Details**:
   - Each character card shows the name, image, and number of episodes they appear in.
---
## :package: Folder Structure
```plaintext
:open_file_folder: components
 ┣ :scroll: Container.tsx         // Reusable layout container
 ┣ :scroll: MultiSelect.tsx       // Main multi-select component
:open_file_folder: store
 ┣ :scroll: useCharacterStore.ts  // Zustand store for managing character selections
:open_file_folder: types
 ┣ :scroll: character.ts          // Type definitions for characters
:scroll: App.tsx                  // Entry point
:scroll: README.md                // Documentation
```
---
## :scroll: License
This project is licensed under the [MIT License](./LICENSE).
---
## :sparkles: Acknowledgments
- [Rick and Morty API](https://rickandmortyapi.com/) for the character data.
- [Expo](https://expo.dev/) for simplifying React Native development.
- [TanStack Query](https://tanstack.com/query/latest) for efficient data fetching and caching.
- [NativeWind](https://www.nativewind.dev/) for styling inspiration.
