import { useState } from "react"

function Stats () {
    const [activeUsers, setActiveUsers] = useState(101)
    return (
        <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Trusted by {activeUsers} active users
            </h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
                On the general dashboard you will find everything to manage your business
            </p>
            </div>

            <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                >
                <dt className="order-last text-lg font-medium text-gray-500">
                    Total Money
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    $4.8m
                </dd>
                </div>

                <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                >
                <dt className="order-last text-lg font-medium text-gray-500">
                    Total Engagement
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24k</dd>
                </div>

                <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                >
                <dt className="order-last text-lg font-medium text-gray-500">
                    Total business
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">8</dd>
                </div>
            </dl>
            </div>
        </div>
        </section>
    )
}

export default Stats