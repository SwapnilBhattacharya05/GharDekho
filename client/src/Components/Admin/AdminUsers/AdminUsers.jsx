import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "../Shared_Container.css"
import "./AdminUser.css"
import { Box, Button, colors } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';


const AdminUsers = () => {

    const [allUsers, setAllUsers] = useState([]);

    const fetchAllUsers = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/user/getallusers", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const json = await response.json();
            // console.log(json.users);
            await setAllUsers(json.users);
        } catch (error) {
            console.error("Error fetching users:", error.message);
        }
    }

    useEffect(() => {
        fetchAllUsers();
    }, []);

    useEffect(() => {
        console.log(allUsers);
    }, [allUsers]);

    // *Add unique IDs to each user in mockUsers
    // TODO: change the 'mockUsers' to the required API
    const usersWithIds = allUsers.map((value, index, array) => ({
        id: index + 1,
        ...value,
    }));

    const columns = [
        {
            field: "_id",
            headerName: "ID",
            width: 90,
        },

        {
            field: "photo",
            headerName: "Avatar",
            width: 100,
            cellClassName: "photo-column-cell",
            renderCell: (params) => <img src={params.value}
                alt="There was something here"
                id="admin-user-images"
            />,
        },

        {
            field: "username",
            headerName: "Username",
            flex: 1,
            cellClassName: "name-column-cell"
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
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
                        id="admin-user-table-action-button">
                        <DeleteIcon />Delete
                    </Button>
                </Box>
            ),
        },
    ];

    return (
        <>
            <Sidebar />
            <div className="admin-main-container">
                <div className="dashboard-main">
                    <h2 className="ml-2">
                        <strong className="admin-page-main-headers">Users</strong>
                    </h2>
                    {/* //!Start Writing Code from here */}
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
                            rows={usersWithIds}
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
            </div>
        </>
    );
};

export default AdminUsers;