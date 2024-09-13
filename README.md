# React Modal Component

A customizable and responsive React Modal component with various styling options.

## Installation

To install the package, run the following command in your project directory:

```bash
npm i maxime-component-modal
```

## Usage

Here's a basic example of how to use the Modal component:

```jsx
import React, { useState } from 'react';
import { Modal } from 'maxime-component-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
      >
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
}

export default App;
```

## Props

The Modal component accepts the following props:

| Prop Name            | Type                          | Default   | Description                                   |
| -------------------- | ----------------------------- | --------- | --------------------------------------------- |
| isOpen               | boolean                       | -         | Controls whether the modal is open or closed  |
| title                | string                        | -         | The title of the modal (optional)             |
| titleFontColor       | string                        | 'black'   | Color of the title text                       |
| titleFontSize        | string                        | '1.25rem' | Font size of the title                        |
| borderTitle          | boolean                       | true      | Whether to show a border below the title      |
| children             | React.ReactNode               | -         | The content of the modal                      |
| onClose              | () => void                    | -         | Function to call when the modal is closed     |
| backgroundColor      | string                        | 'black'   | Background color of the overlay               |
| backgroundOpacity    | number                        | 50        | Opacity of the background overlay (0-100)     |
| blurAmount           | number                        | 0         | Blur intensity for the background overlay     |
| modalBackgroundColor | string                        | 'white'   | Background color of the modal                 |
| modalBorderColor     | string                        | '#e5e7eb' | Border color of the modal                     |
| modalBorderWidth     | number                        | 1         | Border width of the modal in pixels           |
| modalBorderRadius    | number                        | 8         | Border radius of the modal in pixels          |
| modalMaxWidth        | string                        | '28rem'   | Maximum width of the modal                    |
| insideBorderColor    | string                        | '#e5e7eb' | Color of the border below the title           |
| insideBorderWidth    | number                        | 1         | Width of the border below the title in pixels |
| closeColor           | string                        | '#6b7280' | Color of the close button                     |
| positionTitle        | 'left' \| 'center' \| 'right' | 'left'    | Horizontal alignment of the title             |
| positionCloseButton  | 'left' \| 'right'             | 'right'   | Position of the close button                  |
| positionCloseButton  | 'left' \| 'right'             | 'right'   | Position of the close button                  |

## Customization

You can customize the appearance of the modal by adjusting the props. Here's an example with custom styling:

```jsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Custom Styled Modal"
  titleFontColor="#333"
  titleFontSize="1.5rem"
  backgroundColor="rgba(0, 0, 0, 0.8)"
  blurAmount={6}
  modalBackgroundColor="#f0f0f0"
  modalBorderColor="#007bff"
  modalBorderWidth={2}
  modalBorderRadius={16}
  modalMaxWidth="40rem"
  positionTitle="center"
  closeColor="#007bff"
>
  <p>This modal has custom styling applied.</p>
</Modal>
```
