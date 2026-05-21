import Button from './Button'; // Buttonコンポーネントをインポート

export default function App() {
  return (
    <div>
      <h1>ようこそ、私のアプリへ！</h1>
      <Button /> {/* Buttonコンポーネントを呼び出し */}
      <Button />
      <Button /> {/* 何回でも呼び出せる */}
    </div>
  );
}
