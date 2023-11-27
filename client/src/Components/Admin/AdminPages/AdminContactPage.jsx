import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./AdminPageStyles/AdminContactPage.css"
import { Box, Button, colors } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';


const AdminContactPage = () => {
    const [allContacts, setAllContacts] = useState([])
    const fetchAllContacts = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/contact/fetchcontacts`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json()
            await setAllContacts(json.contacts);

        } catch (error) {
            console.error("Error fetching contact:", error.message)
        }
    }
    useEffect(() => {
        fetchAllContacts()
    }, [])

    useEffect(() => {
        console.log(allContacts)
    }, [allContacts])


    const handleDelete = async (contact) => {
        const contactId = contact.id;

        console.log("Deleting contact with ID:", contactId);

        setAllContacts((prev) => prev.filter((e) => e._id !== contactId));

        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/contact/deletecontact/${contactId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error("Error While Deleting contact:", error.message);
        }
    };


    const contactWithIds = allContacts.map((value, index, array) => ({
        id: value._id,
        ...value,
    }))
    const columns = [
        {
            field: "_id",
            headerName: "ID",
            width: 90,
        },

        {
            field: "name",
            headerName: "Name",
            flex: 1,
        },

        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },

        {
            field: "phone",
            headerName: "Phone No.",
            flex: 1,
        },

        {
            field: "message",
            headerName: "Message",
            flex: 2,
        },
        {
            field: "action",
            headerName: "Action",
            flex: 1,

            renderCell: ({ row: { action } }) => (
                <Box
                    width="40%"
                    m="0 auto"
                    p="2px"
                    display="flex"
                    justifyContent="center"
                    borderRadius="4px"
                >

                    {/* //?Adds a delete button to every row in the table */}
                    <Button
                        color="error"
                        className="admin-user-table-action-button"
                        id="admin-user-table-action-button"
                        onClick={handleDelete}
                    >
                        <DeleteIcon />Delete
                    </Button>
                </Box>
            ),
        }
    ]

    return (
        <>
            <Sidebar />
            <div className="admin-main-container">
                <div className="dashboard-main">
                    <h2 className="ml-2"><strong className="admin-page-main-headers">Contact Page</strong></h2>
                    {/* // !Start Writing code from here */}
                    <Box className="container"
                        height="auto"
                        width="100%"
                        mt="50px"
                    >
                        <DataGrid

                            sx={{
                                // ?change the style of the entire table
                                "& .MuiDataGrid-root": {
                                    border: "none",
                                },
                                // ?change the style of the cells/rows in the table
                                "& .MuiDataGrid-cell": {
                                    borderBottom: "1px solid #713ABE",
                                },
                                // ?change the style of the headers of the table
                                "& .MuiDataGrid-columnHeaders": {
                                    backgroundColor: "#B2A4FF",
                                },

                                // ?change style of the content in the table 
                                "& .MuiDataGrid-virtualScroller": {
                                    backgroundColor: "#F0F0F0",
                                },
                                // ?change style of the footer of the table
                                "& .MuiDataGrid-footerContainer": {
                                    borderTop: "none",
                                    backgroundColor: "#AA77FF",
                                },
                                // ?change color of the checkmark in checkbox on click
                                "& .Mui-checked": {
                                    color: `${colors.green[500]} !important`,
                                },
                                // ?change the style of the toolbar above the table
                                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                                    color: "#504099 !important",
                                },
                            }}
                            rows={contactWithIds}
                            columns={columns}
                            slots={{ toolbar: GridToolbar }}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 6,
                                    },
                                },
                            }}
                            pageSizeOptions={[6]}

                            // ?checkboxes
                            checkboxSelection

                            // ?to disable selection of rows on mouse click anywhere on the table
                            disableRowSelectionOnClick

                        />


                    </Box>

                </div>
            </div >
        </>
    )
}

export default AdminContactPage
