interface ApiSuccessResponse<T> {
  data: T;
  status: 'success';
}

interface ApiErrorResponse {
  message: string;
  status: 'error';
}

type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

function handleResponse<T>(response: ApiResponse<T>): void {
  if (response.status === 'success') {
    console.log('Success! Data:', response.data);
  } else {
    console.log('Error! Message:', response.message);
  }
}

//TEST
interface User {
  id: number;
  name: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
}

const userResponse: ApiResponse<User> = {
  status: 'success',
  data: { id: 1, name: 'Taro Yamada' },
};

const productResponse: ApiResponse<Product> = {
  status: 'success',
  data: { id: 'abc-123', name: 'Laptop', price: 150000 },
};

const errorResponse: ApiResponse<never> = {
  status: 'error',
  message: 'Could not fetch data from the server.',
};

console.log('--- Handling User Response ---');
handleResponse(userResponse);

console.log('\n--- Handling Product Response ---');
handleResponse(productResponse);

console.log('\n--- Handling Error Response ---');
handleResponse(errorResponse);
