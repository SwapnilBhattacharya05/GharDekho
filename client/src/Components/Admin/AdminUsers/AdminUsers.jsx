import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "../Shared_Container.css"
import "./AdminUser.css"
import { Box, Button, colors } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';

// TODO:Mock data for testing the table can change with the API
import mockUsers from "../../../Data/MockUserData";



const AdminUser = () => {


    // TODO: change the 'mockUsers' to the required API

    // *Add unique IDs to each user in mockUsers
    const usersWithIds = mockUsers.map((value, index, array) => ({
        id: index + 1,
        ...value,
    }));

    const columns = [
        {
            field: "id",
            headerName: "ID"
        },

        // {
        //     field: "photo",
        //     headerName: "Photo",
        // },

        {
            field: "name",
            headerName: "Name",
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

export default AdminUser;
