type Props = {
    items: string[]
}

export default function List({items}: Props){
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 overflow-x-auto p-">
            {items.map((text, idx) => (
                <div key={idx}className="rounded-lg border border-gray-300 bg-white/10 p-4 shadow-sm">
                    <h2 className="font-semibold">Card {idx+1}</h2>
                    <p>{text}</p>
                </div>
            ))}
        </div>
    )
}