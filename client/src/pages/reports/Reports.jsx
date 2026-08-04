import Layout from "../../components/layout/Layout";

const Reports = () => {

    const downloadPDF = () => {

        const token = localStorage.getItem("token");

        window.open(

            `http://localhost:5000/api/reports/customers/pdf?token=${token}`,

            "_blank"

        );

    };

    return (

        <Layout>

            <h2>Reports</h2>

            <button
                className="btn btn-danger"
                onClick={downloadPDF}
            >

                Download Customer PDF

            </button>

        </Layout>

    );

};

export default Reports;