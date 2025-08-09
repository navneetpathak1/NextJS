

export default async function BlogPage({params}) {
    const userId = (await params).userId;

    return <div>
        {!userId && <div>/bloggs also works </div>}
        {JSON.stringify(userId)}
    </div>

}