import UserProfile from "./components/UserProfile";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
    return (
        <>
            <WelcomeMessage />

            {/* UserProfileコンポーネントを2回再利用 */}
            <UserProfile name="田中太郎" hobby="プログラミング" />
            <UserProfile name="高橋花子" hobby="ネットサーフィン" />
            <UserProfile name="山田次郎" hobby="筋トレ" />
        </>
    );
}
export default App;
