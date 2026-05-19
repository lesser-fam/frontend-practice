interface User {
    name: string;
    age: number;
    email?: string;
}

function formatUser(user: User): string {
    let result = `名前: ${user.name}, 年齢: ${user.age},歳`;

    if (user.email) {
        result += `,メール: ${user.email}`;
    }

    return result;
}

// テスト
const user1: User = { name: "田中太郎", age: 20 };
const user2: User = { name: "佐藤花子", age: 30, email: "hanako@example.com" };

console.log(formatUser(user1));
console.log(formatUser(user2));
