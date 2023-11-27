import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "../Shared_Container.css";
import "../AdminPages/AdminPageStyles/AdminBlogPage.css";
import ImageIcon from '@mui/icons-material/Image';
import NotesIcon from '@mui/icons-material/Notes';
import { Box, Button, colors } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Flip, toast } from "react-toastify";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../../../firebase.js";

const AdminBlogPage = () => {
    const [blogData, setBlogData] = useState([]);
    const [newBlog, setNewBlog] = useState({ title: "", author: "", content: "", image: "" });
    const [filePercentage, setFilePercentage] = useState(0);
    const [imageUploadError, setImageUploadError] = useState(false);
    const [imgaeUploading, setImgaeUploading] = useState(false);
    const [file, setFile] = useState(undefined);

    const fetchBlogData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/blog/getallblogs`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();
            setBlogData(json.blogs);
        } catch (error) {
            console.error("Error Fetching blogs:", error.message);
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, []);

    const handleDelete = async (blog) => {
        const blogId = blog.id;

        console.log("Deleting blog with ID:", blogId);

        setBlogData((prev) => prev.filter((e) => e._id !== blogId));

        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/blog/deleteblog/${blogId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error("Error While Deleting blog:", error.message);
        }
    };

    const handleUploadImage = async (e) => {
        e.preventDefault();
        setImgaeUploading(true);
        const storage = getStorage(app);
        const fileName = new Date().getTime() + (file ? file.name : "");
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setFilePercentage(progress);
        }, (error) => {
            setImageUploadError(true);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setImgaeUploading(false);
                setNewBlog({ ...newBlog, image: downloadURL });
            });
        });
    };

    const handleOnChange = (e) => {
        setNewBlog((prevBlog) => ({ ...prevBlog, [e.target.name]: e.target.value }));
    };

    const addNewBlog = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/blog/postblog`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newBlog)
            });

            const json = await response.json();

            if (json.success) {
                const addedBlog = json.blog;

                setBlogData((prev) => [...prev, addedBlog]);

                toast.success(json.msg, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    transition: Flip,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                toast.error(json.errors[0].msg, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    transition: Flip,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            console.error("Error posting blog:", error);
        }
    };

    useEffect(() => {
        console.log(blogData);
    }, [blogData]);

    const blogWithIds = blogData?.map((value, index, array) => ({
        id: value._id,
        ...value,
    })) || [];

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
            renderCell: (params) => (
                <img src={params.value} alt="There was something here" id="admin-blog-images" />
            ),
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
            renderCell: ({ row }) => (
                <Box
                    width="40%"
                    m="0 auto"
                    p="2px"
                    display="flex"
                    justifyContent="center"
                    borderRadius="4px"
                >
                    <Button
                        color="success"
                        className="admin-user-table-action-button"
                        id="admin-user-table-action-button"
                    >
                        <DriveFileRenameOutlineIcon />
                    </Button>
                    <Button
                        color="error"
                        className="admin-user-table-action-button"
                        id="admin-user-table-action-button"
                        type="button"
                        onClick={() => handleDelete(row)}
                    >
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
                    <h2 className="ml-2">
                        <strong className="admin-page-main-headers">Blog Page</strong>
                    </h2>
                    <div className="row">
                        <div className="d-flex">
                            <button
                                className="btn btn-success"
                                type="button"
                                data-toggle="modal"
                                data-target="#staticBackdrop"
                                id="admin-blog-add-button"
                            >
                                <AddCircleRoundedIcon /> Add
                            </button>
                            <div
                                className="modal fade"
                                id="staticBackdrop"
                                data-backdrop="static"
                                data-keyboard="false"
                                tabIndex="-1"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog modal-dialog-centered blog-admin-page-form-all-wrapper">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4
                                                className="modal-title modal-title-admin-blog-page"
                                                id="staticBackdropLabel"
                                            >
                                                Blogs
                                            </h4>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form method="post" onSubmit={(e) => e.preventDefault()}>
                                                <div className="blog-form-admin-page-wrapper">
                                                    <DriveFileRenameOutlineIcon className="admin-sidebar-icons" /><strong> Blogs Heading</strong>
                                                </div>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Enter the Blog Heading"
                                                    id="blog-heading"
                                                    name="title"
                                                    className="blog-heading"
                                                    onChange={handleOnChange}
                                                    value={newBlog.title}
                                                />
                                                <div className="blog-form-admin-page-wrapper">
                                                    <PersonAddIcon className="admin-sidebar-icons" /><strong> Author</strong>
                                                </div>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Enter Author name"
                                                    id="blog-author"
                                                    name="author"
                                                    className="blog-author"
                                                    onChange={handleOnChange}
                                                    value={newBlog.author}
                                                />
                                                <div className="blog-form-admin-page-wrapper">
                                                    <NotesIcon className="admin-sidebar-icons" /><strong> Content</strong>
                                                </div>
                                                <textarea
                                                    required
                                                    placeholder="Enter your Content here"
                                                    id="blog-content"
                                                    className="blog-content"
                                                    name="content"
                                                    onChange={handleOnChange}
                                                    value={newBlog.content}
                                                    rows={5}
                                                    style={{
                                                        msOverflowY: "scroll",
                                                        resize: "none"
                                                    }}
                                                />
                                                <div className="blog-form-admin-page-wrapper">
                                                    <ImageIcon className="admin-sidebar-icons" /><strong> Image</strong>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <input
                                                        type="file"
                                                        name="image"
                                                        accept="image/*"
                                                        onChange={(e) => setFile(e.target.files[0])}
                                                        style={{ marginBottom: "0" }}
                                                        required
                                                        id="blog-admin-img"
                                                        className="blog-admin-img mr-2"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={handleUploadImage}
                                                        className="btn btn-outline-success"
                                                        required
                                                        disabled={!file || imgaeUploading}
                                                    >
                                                        {imgaeUploading ? "Uploading..." : "Upload"}
                                                    </button>
                                                    {imageUploadError ? (
                                                        <span className='text-danger ml-2'>Error While Uploading the Image</span>
                                                    ) : filePercentage > 0 && filePercentage < 100 ? (
                                                        <span className="text-success ml-2">{`Uploading: ${filePercentage}%`}</span>
                                                    ) : filePercentage === 100 ? (
                                                        <span className='text-success ml-2'>Image Uploaded Successfully</span>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                                <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        data-dismiss="modal"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        className="btn btn-success"
                                                        data-dismiss="modal"
                                                        type="submit"
                                                        onClick={addNewBlog}
                                                    >
                                                        Post
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Box
                        className="container"
                        height="auto"
                        width="100%"
                        mt="50px"
                    >
                        <DataGrid
                            sx={{
                                "& .MuiDataGrid-root": {
                                    border: "none",
                                },
                                "& .MuiDataGrid-cell": {
                                    borderBottom: "1px solid #713ABE",
                                },
                                "& .MuiDataGrid-columnHeaders": {
                                    backgroundColor: "#B2A4FF",
                                },
                                "& .MuiDataGrid-virtualScroller": {
                                    backgroundColor: "#F0F0F0",
                                },
                                "& .MuiDataGrid-footerContainer": {
                                    borderTop: "none",
                                    backgroundColor: "#AA77FF",
                                },
                                "& .Mui-checked": {
                                    color: `${colors.green[500]} !important`,
                                },
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
                            checkboxSelection
                            disableRowSelectionOnClick
                        />
                    </Box>
                </div>
            </div>
        </>
    );
}

export default AdminBlogPage;

