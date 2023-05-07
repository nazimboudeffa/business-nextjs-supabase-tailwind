import Card from './Card'

function Products () {
    return (
        <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6">    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Products