# Pizza Ordering App

A Next.js application that simulates a pizza ordering system, allowing users to customize their pizza with various toppings, see a custom pizza visualization, choose delivery options, and complete their order.

## Application Structure

### Components

- **`form_login.js`**: User authentication component that validates name and email input.
- **`form_delivery.js`**: Form for selecting delivery method (pickup or home delivery) with address input fields.
- **`list.js`**: Displays available pizza toppings with prices and allows filtering for vegetarian options.
- **`Nav.js`**: Navigation bar with conditional links based on order state.
- **`oven.js`**: Visual representation of a pizza oven containing the pizza preview.
- **`pizza.js`**: Dynamic pizza visualization that updates based on selected toppings.
- **`toppings.js`**: Contains data about available toppings with images.

### Context Providers

- **`PizzaContext.js`**: Manages pizza customization state:
  - Tracks selected toppings
  - Calculates total price
  - Verifies crust selection
  - Provides toggle functionality for adding/removing toppings

- **`UserContext.js`**: Manages user information:
  - Stores user name and email
  - Provides methods to update user data

### Pages

- **`index.js`**: Landing page with login form
- **`ingredients.js`**: Toppings selection page with pizza visualization
- **`delivery.js`**: Delivery options selection
- **`review.js`**: Order confirmation and receipt

## State Management

The application uses React Context API for state management across components:

1. **Pizza State**:
   - Selected toppings array
   - Total price calculation
   - Crust verification logic

2. **User State**:
   - Name and email information
   - Form validation

## Key Features

- **Custom Pizza Visualization**: Real-time visual representation of the pizza updates as toppings are selected
- **Crust Requirement**: Orders cannot proceed without selecting a crust
- **Vegetarian Filtering**: Option to filter toppings list to show only vegetarian items
- **Form Validation**: Email validation and required field checking
- **Conditional Navigation**: Routes are conditionally available based on order state

## App Usage

1. User logs in with name and email
2. User selects pizza toppings (must include a crust)
3. User chooses delivery method (pickup or home delivery)
4. Order is reviewed and confirmed
