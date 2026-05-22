import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 1. Zodスキーマを定義
const FormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(20),
  lastName: z.string().regex(/^[A-Za-z]+$/i, 'Last name must be alphabet'),
  age: z.coerce.number().min(18, 'Age must be between 18 and 99').max(99),
});

// 2. スキーマから型を推論
type IFormInput = z.infer<typeof FormSchema>;

function App() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<IFormInput>({
    // 3. resolverをuseFormに設定
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    alert(`Hello, ${data.firstName} ${data.lastName}!`);
  };

  return (
    // 4. エラーメッセージをZodから取得
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input {...register("firstName")} />
        {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}
      </div>

      <div>
        <label>Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}
      </div>

      <div>
        <label>Age</label>
        <input type="number" {...register("age")} />
        {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;