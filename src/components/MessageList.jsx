function MessageList({ messages }){
    const sorted = [...messages].sort((a,b) => a.sentAt > b.sentAt ? 1 :-1 )

    return (
        <div>
            {sorted.map((msg) => (<p key={msg._id}>{msg.content}</p>))}
        </div>
)
}

export default MessageList;