# React Severity Modal

A simple, customizable modal component for React that changes its appearance based on the severity level (error, warning, success). This modal is designed to be easily integrated into any React project.

## Features

- **Dynamic Styling**: The modal changes its background color based on the severity type (`error`, `warning`, `success`).
- **Customizable**: You can pass the title, message, and severity level as props.
- **Close Functionality**: The modal includes a close button to dismiss it.

## Installation

To install this modal component, use npm or yarn:

```bash
npm install tm-react-modal

# or
yarn add tm-react-modal

```

## Usage

```jsx
import { Modal } from "tm-react-modal"

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      <Modal
        show={showModal}
        onClose={handleClose}
        title="Success!"
        message="Your operation was completed successfully."
        severity="success" // Options: 'error', 'warning', 'success'
      />
    </div>
  );
};

export default App;
```