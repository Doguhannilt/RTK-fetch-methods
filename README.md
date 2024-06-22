
# RTK-fetch-methods

RTK Query Tutorial For Data Fetching

## Overview

This repository contains a tutorial on how to use Redux Toolkit (RTK) Query for data fetching in a React application. RTK Query simplifies data fetching and caching, providing a robust solution for handling server-side data.

## Features

- Fetch all products
- Fetch a product by ID
- Add a new product
- Update an existing product

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/Doguhannilt/RTK-fetch-methods.git
    ```
2. Navigate to the project directory:
    ```sh
    cd RTK-fetch-methods
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm run dev
    ```

## API Endpoints

### Get All Products
```javascript
useGetAllProductsQuery();
```

### Get Product By ID
```javascript
useGetProductByIdQuery(id);
```

### Add New Product
```javascript
useAddNewProductMutation();
```

### Update Product
```javascript
useUpdateProductMutation();
```

## Usage

### Fetch All Products
```javascript
const { data, error, isLoading } = useGetAllProductsQuery();
```

### Fetch Product By ID
```javascript
const { data, error, isLoading } = useGetProductByIdQuery(id);
```

### Add New Product
```javascript
const [addNewProduct] = useAddNewProductMutation();
addNewProduct(newProductData);
```

### Update Product
```javascript
const [updateProduct] = useUpdateProductMutation();
updateProduct({ id, updatedProductData });
```

### Thanks
This repository information comes from a tutorial on YouTube. Check <a href="https://www.youtube.com/watch?v=CI8VeG0GI-M">This Channel</a> Out!

