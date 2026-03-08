function MessageList({ messages, users, selectedUser }){
    const sorted = [...messages].sort((a,b) => a.sentAt > b.sentAt ? 1 :-1 )

    return (
        <div>
            {sorted.map((msg) => (
                <p key={msg._id} style={{ textAlign: msg.senderId === selectedUser ? 'right' : 'left' }}>
                    {users?.[msg.senderId]?.Nom} : {msg.content}
                </p>
            ))}
        </div>
)
}

export default MessageList;