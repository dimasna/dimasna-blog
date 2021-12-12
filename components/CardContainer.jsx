export default function CardContainer({children}){
    return(
        <div className={`px-2 py-3 flex flex-row flex-wrap justify-between gap-4`}>
            {children}
        </div>
    )
}