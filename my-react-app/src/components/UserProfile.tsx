type UserProfileProps = {
    name: string;
    hobby: string;
};

function UserProfile({ name, hobby }: UserProfileProps) {
    return (
        // ルール1: 単一のルート要素で囲む
        // ルール3: classではなくclassNameを使う
        <div className="user-profile">
            <p>名前: {name}</p>
            <p>趣味: {hobby}</p>
            {/* ルール2: 閉じタグを忘れない */}
            <hr />
        </div>
    );
}

export default UserProfile;
