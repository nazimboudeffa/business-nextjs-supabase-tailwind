import Card from './Card'

function Products () {
    const services = [
        { 
            id : '1',
            title : 'Affiliation',
            description : 'Start doing affiliation marketing'
        },
        { 
            id : '2',
            title : 'Title',
            description : 'Description'
        },
        { 
            id : '3',
            title : 'Title',
            description : 'Description'
        },
        { 
            id : '4',
            title : 'Title',
            description : 'Description'
        },
        { 
            id : '5',
            title : 'Title',
            description : 'Description'
        },
        { 
            id : '6',
            title : 'Title',
            description : 'Description'
        },
        { 
            id : '7',
            title : 'Title',
            description : 'Description'
        }
    ]
    return (
        <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6">    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
                {
                    services.map(service => (
                        <Card {...service} key={service.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products