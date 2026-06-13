export default async function UserProfile({ params }: any) {
    const { id } = await params;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile Page</h1>
            <h2 className=" p-2 rounded bg-orange-500 text-black">{id}</h2>
        </div>
    )
}