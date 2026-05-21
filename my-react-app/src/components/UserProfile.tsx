type UserProfileProps = {
    name: string;
    age?: number;
    hobby: string;
    bio?: string;
};

function UserProfile({
    name,
    age,
    hobby,
    bio = "よろしくお願いします。",
}: UserProfileProps) {
    return (
        <div>
            <p>名前: {name}</p>
            {age && <p>年齢:{age}歳</p>}
            <p>趣味: {hobby}</p>
            {bio && <p>自己紹介: {bio}</p>}
            <hr />
        </div>
    );
}

export default UserProfile;
