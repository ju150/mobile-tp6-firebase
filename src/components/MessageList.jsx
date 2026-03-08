function MessageList({ messages, users, currentUser }){
    const sorted = [...messages].sort((a,b) => a.sentAt > b.sentAt ? 1 :-1 )

    return (
        <div>
            {sorted.map((msg) => {
                const isMe = msg.senderId === currentUser?.uid;
                const name = isMe ? (currentUser.displayName || 'Moi') : (users?.[msg.senderId]?.Nom || 'Inconnu');
                return (
                    <p key={msg._id} style={{ textAlign: isMe ? 'right' : 'left' }}>
                        {name} : {msg.content}
                    </p>
                );
            })}
        </div>
)
}

export default MessageList;