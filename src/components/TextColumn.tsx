interface IDropDownAside {
    title: string,
    paragraphs: string[]
}

export default function TextColumn({ title, paragraphs }:IDropDownAside) {
    return (
        <div>
            <h4 className="font-semibold text-neutral-700">{title}</h4>
            <div className="flex flex-col gap-2 mt-2">
                {paragraphs.map((p) => (
                    <p className="text-sm text-neutral-500">{p}</p>
                ))}
            </div>
        </div>
    )
}