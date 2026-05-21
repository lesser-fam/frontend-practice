import Card from "./components/Card";
import UserProfile from "./components/UserProfile";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
    return (
        <>
            <WelcomeMessage />

            <Card>
                <h2>自由なテキスト</h2>
                <UserProfile name="田中太郎" age={25} hobby="プログラミング" />
            </Card>

            <Card>
                <UserProfile
                    name="高橋花子"
                    hobby="ネットサーフィン"
                    bio="プログラミング練習中"
                />
            </Card>

            <Card>
                <UserProfile name="山田次郎" age={35} hobby="筋トレ" />
                <button>押せないボタン</button>
            </Card>
        </>
    );
}
export default App;
