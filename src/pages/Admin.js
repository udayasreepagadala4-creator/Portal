import React, { useEffect, useState } from "react";

function Admin() {

    const [enquiries, setEnquiries] = useState([]);

    useEffect(() => {

        fetch("http://127.0.0.1:5000/admin")
            .then((response) => response.json())
            .then((data) => {
                setEnquiries(data);
            });

    }, []);

    return (

        <div style={styles.page}>

            <div style={styles.container}>

                <h1 style={styles.heading}>
                    Admin Dashboard
                </h1>

                <p style={styles.subheading}>
                    Student Enquiry Details
                </p>

                <div style={styles.tableContainer}>

                    <table style={styles.table}>

                        <thead>

                            <tr style={styles.headerRow}>

                                <th style={styles.th}>ID</th>
                                <th style={styles.th}>Name</th>
                                <th style={styles.th}>Email</th>
                                <th style={styles.th}>Phone</th>
                                <th style={styles.th}>Course</th>
                                <th style={styles.th}>Message</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                enquiries.map((item) => (

                                    <tr key={item.id} style={styles.row}>

                                        <td style={styles.td}>{item.id}</td>

                                        <td style={styles.td}>
                                            {item.student_name}
                                        </td>

                                        <td style={styles.td}>
                                            {item.email}
                                        </td>

                                        <td style={styles.td}>
                                            {item.phone}
                                        </td>

                                        <td style={styles.td}>
                                            {item.course_name}
                                        </td>

                                        <td style={styles.td}>
                                            {item.message}
                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

const styles = {

    page: {
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "40px"
    },

    container: {
        maxWidth: "1200px",
        margin: "auto",
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0px 0px 15px rgba(0,0,0,0.1)"
    },

    heading: {
        textAlign: "center",
        marginBottom: "10px",
        color: "#1e293b",
        fontSize: "40px"
    },

    subheading: {
        textAlign: "center",
        marginBottom: "30px",
        color: "gray",
        fontSize: "18px"
    },

    tableContainer: {
        overflowX: "auto"
    },

    table: {
        width: "100%",
        borderCollapse: "collapse"
    },

    headerRow: {
        background: "#2563eb",
        color: "white"
    },

    th: {
        padding: "15px",
        textAlign: "left",
        fontSize: "16px"
    },

    td: {
        padding: "15px",
        borderBottom: "1px solid #ddd",
        fontSize: "15px"
    },

    row: {
        backgroundColor: "white"
    }
};

export default Admin;