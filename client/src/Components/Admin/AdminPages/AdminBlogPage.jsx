import React, { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar"
import "../Shared_Container.css"
import "../AdminPages/AdminPageStyles/AdminBlogPage.css"
import ImageIcon from '@mui/icons-material/Image';
import NotesIcon from '@mui/icons-material/Notes';
import { Box, Button, colors } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const AdminBlogPage = () => {
    const [blogData, setBlogData] = useState([]);

    const fetchBlogData = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/blog/getallblogs", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();
            // console.log(json.blogs)
            await setBlogData(json.blogs);
        } catch (error) {
            console.error("Error Fetching blogs:", error.message);
        }
    }

    useEffect(() => {
        fetchBlogData();
    }, []);

    useEffect(() => {
        console.log(blogData);
    }, [blogData]);

    const blogWithIds = blogData.map((value, index, array) => ({
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
            field: "image",
            headerName: "Image",
            cellClassName: "photo-column-cell",
            renderCell: (params) => <img src={params.value}
                alt="There was something here"
                id="admin-blog-images"
            />,
        },
        {
            field: "author",
            headerName: "Author",
            width: 200,
        },

        {
            field: "title",
            headerName: "Title",
            cellClassName: "name-column-cell",
            width: 550,

        },

        {
            field: "action",
            headerName: "Action",

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
                        color="success"
                        className="admin-user-table-action-button"
                        id="admin-user-table-action-button">
                        <DriveFileRenameOutlineIcon />
                    </Button>
                    <Button
                        color="error"
                        className="admin-user-table-action-button"
                        id="admin-user-table-action-button">
                        <DeleteIcon />
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
                    <h2 className="ml-2"><strong className="admin-page-main-headers">Blog Page</strong></h2>
                    {/* //!Start Writing Code from here */}
                    <div className="row">
                        <div className="d-flex">
                            <button className="btn btn-success"
                                type='button'
                                data-toggle="modal"
                                data-target="#staticBackdrop"
                                id="admin-blog-add-button"
                            >
                                <AddCircleRoundedIcon /> Add
                            </button>

                            {/* //!Modal to show upon clicking add/update button */}
                            <div class="modal fade"
                                id="staticBackdrop"
                                data-backdrop="static"
                                data-keyboard="false"
                                tabindex="-1"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog modal-dialog-centered blog-admin-page-form-all-wrapper">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title modal-title-admin-blog-page"
                                                id="staticBackdropLabel"
                                            >
                                                Blogs
                                            </h4>
                                            <button type="button"
                                                class="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form method="post">
                                                <div className="blog-form-admin-page-wrapper">
                                                    <DriveFileRenameOutlineIcon className="admin-sidebar-icons" id="" /><strong> Blogs Heading</strong>
                                                </div>
                                                <input type="text"
                                                    required
                                                    placeholder="Enter the Blog Heading"
                                                    id="blog-heading"
                                                    className="blog-heading"
                                                // value={''}
                                                />
                                                <div className="blog-form-admin-page-wrapper">
                                                    <PersonAddIcon className="admin-sidebar-icons" id="" /><strong> Author</strong>
                                                </div>
                                                <input type="text"
                                                    required
                                                    placeholder="Enter Author name"
                                                    id="blog-author"
                                                    className="blog-author"
                                                />
                                                <div className="blog-form-admin-page-wrapper">
                                                    <NotesIcon className="admin-sidebar-icons" id="" /><strong> Content</strong>
                                                </div>
                                                <textarea required
                                                    placeholder="Enter your Content here"
                                                    id="blog-content"
                                                    className="blog-content"
                                                    rows={5}
                                                    style={{
                                                        msOverflowY: "scroll",
                                                        resize: "none"
                                                    }}

                                                />
                                                <div className="blog-form-admin-page-wrapper">
                                                    <ImageIcon className="admin-sidebar-icons" id="" /><strong> Image</strong>
                                                </div>
                                                <input type="file"
                                                    required
                                                    id="blog-admin-img"
                                                    className="blog-admin-img"
                                                />
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button"
                                                class="btn btn-danger"
                                                data-dismiss="modal"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                class="btn btn-success"
                                                data-dismiss="modal"
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            rows={blogWithIds}
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
    )
}
export default AdminBlogPage;