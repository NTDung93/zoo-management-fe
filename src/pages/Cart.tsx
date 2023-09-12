import ImageBottom from "../components/Bottom/ImageBottom";

export default function Cart() {
    return (
        <>
            <div className="section--sm section--top">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="table-responsive--md">
                                <table className="table custom--table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Ticket Details</th>
                                            <th>Date</th>
                                            <th>Total Fee</th>
                                            <th className="text-center">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Name">
                                                <strong>Robart Williams</strong>
                                            </td>
                                            <td data-label="Ticket Details">
                                                Adult - 02  ,  Senior 04 , child 02 ueder 2 years
                                            </td>
                                            <td data-label="Date">
                                                15 December 2021
                                            </td>
                                            <td data-label="Total Fee">
                                                $140.00
                                            </td>
                                            <td data-label="Remove" className="text-center">
                                                <a href="#" className="btn btn--sm btn--base"> Remove </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name">
                                                <strong>Nirottor Sing</strong>
                                            </td>
                                            <td data-label="Ticket Details">
                                                Adult - 02  ,  Senior 04 , child 02 ueder 2 years
                                            </td>
                                            <td data-label="Date">
                                                15 December 2021
                                            </td>
                                            <td data-label="Total Fee">
                                                $140.00
                                            </td>
                                            <td data-label="Remove" className="text-center">
                                                <a href="#" className="btn btn--sm btn--base"> Remove </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name">
                                                <strong>Mohsin Molla</strong>
                                            </td>
                                            <td data-label="Ticket Details">
                                                Adult - 02  ,  Senior 04 , child 02 ueder 2 years
                                            </td>
                                            <td data-label="Date">
                                                15 December 2021
                                            </td>
                                            <td data-label="Total Fee">
                                                $140.00
                                            </td>
                                            <td data-label="Remove" className="text-center">
                                                <a href="#" className="btn btn--sm btn--base"> Remove </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name">
                                                <strong>Robart Williams</strong>
                                            </td>
                                            <td data-label="Ticket Details">
                                                Adult - 02  ,  Senior 04 , child 02 ueder 2 years
                                            </td>
                                            <td data-label="Date">
                                                15 December 2021
                                            </td>
                                            <td data-label="Total Fee">
                                                $140.00
                                            </td>
                                            <td data-label="Remove" className="text-center">
                                                <a href="#" className="btn btn--sm btn--base"> Remove </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ImageBottom/>
        </>
    )
}